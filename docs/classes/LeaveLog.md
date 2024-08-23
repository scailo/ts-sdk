[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeaveLog

# Class: LeaveLog

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.LeaveLog

## Hierarchy

- `Message`\<[`LeaveLog`](LeaveLog.md)\>

  ↳ **`LeaveLog`**

## Table of contents

### Constructors

- [constructor](LeaveLog.md#constructor)

### Properties

- [entityUuid](LeaveLog.md#entityuuid)
- [leaveTypeId](LeaveLog.md#leavetypeid)
- [metadata](LeaveLog.md#metadata)
- [quantity](LeaveLog.md#quantity)
- [refFrom](LeaveLog.md#reffrom)
- [refId](LeaveLog.md#refid)
- [uomId](LeaveLog.md#uomid)
- [userId](LeaveLog.md#userid)
- [fields](LeaveLog.md#fields)
- [runtime](LeaveLog.md#runtime)
- [typeName](LeaveLog.md#typename)

### Methods

- [clone](LeaveLog.md#clone)
- [equals](LeaveLog.md#equals)
- [fromBinary](LeaveLog.md#frombinary)
- [fromJson](LeaveLog.md#fromjson)
- [fromJsonString](LeaveLog.md#fromjsonstring)
- [getType](LeaveLog.md#gettype)
- [toBinary](LeaveLog.md#tobinary)
- [toJSON](LeaveLog.md#tojson)
- [toJson](LeaveLog.md#tojson-1)
- [toJsonString](LeaveLog.md#tojsonstring)
- [equals](LeaveLog.md#equals-1)
- [fromBinary](LeaveLog.md#frombinary-1)
- [fromJson](LeaveLog.md#fromjson-1)
- [fromJsonString](LeaveLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeaveLog**(`data?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeaveLog`](LeaveLog.md)\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Overrides

Message\&lt;LeaveLog\&gt;.constructor

#### Defined in

src/leaves_logs.scailo_pb.ts:238

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/leaves_logs.scailo_pb.ts:187

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: uint64 leave_type_id = 14;

#### Defined in

src/leaves_logs.scailo_pb.ts:229

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this record

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/leaves_logs.scailo_pb.ts:194

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity = 15;

#### Defined in

src/leaves_logs.scailo_pb.ts:236

___

### refFrom

• **refFrom**: `string` = `""`

The reference on the basis of which this record is created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/leaves_logs.scailo_pb.ts:215

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The corresponding reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/leaves_logs.scailo_pb.ts:222

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the uom

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

src/leaves_logs.scailo_pb.ts:208

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

src/leaves_logs.scailo_pb.ts:201

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_logs.scailo_pb.ts:245

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_logs.scailo_pb.ts:243

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeaveLog"``

#### Defined in

src/leaves_logs.scailo_pb.ts:244

## Methods

### clone

▸ **clone**(): [`LeaveLog`](LeaveLog.md)

Create a deep copy.

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`\<[`LeaveLog`](LeaveLog.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`LeaveLog`](LeaveLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeaveLog`](LeaveLog.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`\<[`LeaveLog`](LeaveLog.md)\> |
| `b` | `undefined` \| [`LeaveLog`](LeaveLog.md) \| `PlainMessage`\<[`LeaveLog`](LeaveLog.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_logs.scailo_pb.ts:268

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:256

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:260

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeaveLog`](LeaveLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeaveLog`](LeaveLog.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:264
