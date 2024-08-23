[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServiceUpdateRequest

# Class: PayrollGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.PayrollGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\>

  ↳ **`PayrollGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](PayrollGroupsServiceUpdateRequest.md#code)
- [description](PayrollGroupsServiceUpdateRequest.md#description)
- [id](PayrollGroupsServiceUpdateRequest.md#id)
- [name](PayrollGroupsServiceUpdateRequest.md#name)
- [notifyUsers](PayrollGroupsServiceUpdateRequest.md#notifyusers)
- [userComment](PayrollGroupsServiceUpdateRequest.md#usercomment)
- [fields](PayrollGroupsServiceUpdateRequest.md#fields)
- [runtime](PayrollGroupsServiceUpdateRequest.md#runtime)
- [typeName](PayrollGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](PayrollGroupsServiceUpdateRequest.md#clone)
- [equals](PayrollGroupsServiceUpdateRequest.md#equals)
- [fromBinary](PayrollGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](PayrollGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](PayrollGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](PayrollGroupsServiceUpdateRequest.md#gettype)
- [toBinary](PayrollGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](PayrollGroupsServiceUpdateRequest.md#tojson)
- [toJson](PayrollGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](PayrollGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](PayrollGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](PayrollGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](PayrollGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PayrollGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServiceUpdateRequest**(`data?`): [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\> |

#### Returns

[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;PayrollGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:243

## Properties

### code

• **code**: `string` = `""`

The payroll group code

**`Generated`**

from field: string code = 11;

#### Defined in

src/payroll_groups.scailo_pb.ts:234

___

### description

• **description**: `string` = `""`

The description of the payroll group

**`Generated`**

from field: string description = 13;

#### Defined in

src/payroll_groups.scailo_pb.ts:241

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/payroll_groups.scailo_pb.ts:213

___

### name

• **name**: `string` = `""`

The name of the payroll group

**`Generated`**

from field: string name = 10;

#### Defined in

src/payroll_groups.scailo_pb.ts:227

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/payroll_groups.scailo_pb.ts:220

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/payroll_groups.scailo_pb.ts:206

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:250

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:248

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServiceUpdateRequest"``

#### Defined in

src/payroll_groups.scailo_pb.ts:249

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:271

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:259

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:263

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceUpdateRequest`](PayrollGroupsServiceUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:267
