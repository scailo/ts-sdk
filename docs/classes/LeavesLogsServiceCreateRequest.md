[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesLogsServiceCreateRequest

# Class: LeavesLogsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LeavesLogsServiceCreateRequest

## Hierarchy

- `Message`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\>

  ↳ **`LeavesLogsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesLogsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](LeavesLogsServiceCreateRequest.md#entityuuid)
- [leaveTypeId](LeavesLogsServiceCreateRequest.md#leavetypeid)
- [quantity](LeavesLogsServiceCreateRequest.md#quantity)
- [refFrom](LeavesLogsServiceCreateRequest.md#reffrom)
- [refId](LeavesLogsServiceCreateRequest.md#refid)
- [uomId](LeavesLogsServiceCreateRequest.md#uomid)
- [userId](LeavesLogsServiceCreateRequest.md#userid)
- [fields](LeavesLogsServiceCreateRequest.md#fields)
- [runtime](LeavesLogsServiceCreateRequest.md#runtime)
- [typeName](LeavesLogsServiceCreateRequest.md#typename)

### Methods

- [clone](LeavesLogsServiceCreateRequest.md#clone)
- [equals](LeavesLogsServiceCreateRequest.md#equals)
- [fromBinary](LeavesLogsServiceCreateRequest.md#frombinary)
- [fromJson](LeavesLogsServiceCreateRequest.md#fromjson)
- [fromJsonString](LeavesLogsServiceCreateRequest.md#fromjsonstring)
- [getType](LeavesLogsServiceCreateRequest.md#gettype)
- [toBinary](LeavesLogsServiceCreateRequest.md#tobinary)
- [toJSON](LeavesLogsServiceCreateRequest.md#tojson)
- [toJson](LeavesLogsServiceCreateRequest.md#tojson-1)
- [toJsonString](LeavesLogsServiceCreateRequest.md#tojsonstring)
- [equals](LeavesLogsServiceCreateRequest.md#equals-1)
- [fromBinary](LeavesLogsServiceCreateRequest.md#frombinary-1)
- [fromJson](LeavesLogsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesLogsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesLogsServiceCreateRequest**(`data?`): [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\> |

#### Returns

[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Overrides

Message\&lt;LeavesLogsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_logs.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L141)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/leaves_logs.scailo_pb.ts:97](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L97)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: uint64 leave_type_id = 14;

#### Defined in

[src/leaves_logs.scailo_pb.ts:132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L132)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity = 15;

#### Defined in

[src/leaves_logs.scailo_pb.ts:139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L139)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on the basis of which this record is created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/leaves_logs.scailo_pb.ts:118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L118)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The corresponding reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/leaves_logs.scailo_pb.ts:125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L125)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the uom

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

[src/leaves_logs.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L111)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

[src/leaves_logs.scailo_pb.ts:104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L104)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_logs.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L148)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_logs.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L146)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesLogsServiceCreateRequest"``

#### Defined in

[src/leaves_logs.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L147)

## Methods

### clone

▸ **clone**(): [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_logs.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L170)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L158)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L162)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceCreateRequest`](LeavesLogsServiceCreateRequest.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_logs.scailo_pb.ts#L166)
