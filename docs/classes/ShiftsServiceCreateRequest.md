[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceCreateRequest

# Class: ShiftsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ShiftsServiceCreateRequest

## Hierarchy

- `Message`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

  ↳ **`ShiftsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceCreateRequest.md#constructor)

### Properties

- [code](ShiftsServiceCreateRequest.md#code)
- [dayOfWeek](ShiftsServiceCreateRequest.md#dayofweek)
- [description](ShiftsServiceCreateRequest.md#description)
- [endAt](ShiftsServiceCreateRequest.md#endat)
- [entityUuid](ShiftsServiceCreateRequest.md#entityuuid)
- [name](ShiftsServiceCreateRequest.md#name)
- [startAt](ShiftsServiceCreateRequest.md#startat)
- [timezone](ShiftsServiceCreateRequest.md#timezone)
- [userComment](ShiftsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ShiftsServiceCreateRequest.md#vaultfolderid)
- [fields](ShiftsServiceCreateRequest.md#fields)
- [runtime](ShiftsServiceCreateRequest.md#runtime)
- [typeName](ShiftsServiceCreateRequest.md#typename)

### Methods

- [clone](ShiftsServiceCreateRequest.md#clone)
- [equals](ShiftsServiceCreateRequest.md#equals)
- [fromBinary](ShiftsServiceCreateRequest.md#frombinary)
- [fromJson](ShiftsServiceCreateRequest.md#fromjson)
- [fromJsonString](ShiftsServiceCreateRequest.md#fromjsonstring)
- [getType](ShiftsServiceCreateRequest.md#gettype)
- [toBinary](ShiftsServiceCreateRequest.md#tobinary)
- [toJSON](ShiftsServiceCreateRequest.md#tojson)
- [toJson](ShiftsServiceCreateRequest.md#tojson-1)
- [toJsonString](ShiftsServiceCreateRequest.md#tojsonstring)
- [equals](ShiftsServiceCreateRequest.md#equals-1)
- [fromBinary](ShiftsServiceCreateRequest.md#frombinary-1)
- [fromJson](ShiftsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ShiftsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceCreateRequest**(`data?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Overrides

Message\&lt;ShiftsServiceCreateRequest\&gt;.constructor

#### Defined in

src/shifts.scailo_pb.ts:186

## Properties

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 11;

#### Defined in

src/shifts.scailo_pb.ts:149

___

### dayOfWeek

• **dayOfWeek**: `string` = `""`

The week day that the shift is applicable on

**`Generated`**

from field: string day_of_week = 15;

#### Defined in

src/shifts.scailo_pb.ts:177

___

### description

• **description**: `string` = `""`

The description of the shift

**`Generated`**

from field: string description = 12;

#### Defined in

src/shifts.scailo_pb.ts:156

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift ends (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 end_at = 14;

#### Defined in

src/shifts.scailo_pb.ts:170

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/shifts.scailo_pb.ts:121

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 10;

#### Defined in

src/shifts.scailo_pb.ts:142

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift begins (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 start_at = 13;

#### Defined in

src/shifts.scailo_pb.ts:163

___

### timezone

• **timezone**: `string` = `""`

The timezone as represented in the TZ database

**`Generated`**

from field: string timezone = 16;

#### Defined in

src/shifts.scailo_pb.ts:184

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/shifts.scailo_pb.ts:128

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/shifts.scailo_pb.ts:135

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/shifts.scailo_pb.ts:193

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/shifts.scailo_pb.ts:191

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServiceCreateRequest"``

#### Defined in

src/shifts.scailo_pb.ts:192

## Methods

### clone

▸ **clone**(): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/shifts.scailo_pb.ts:218

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

src/shifts.scailo_pb.ts:206

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

src/shifts.scailo_pb.ts:210

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

src/shifts.scailo_pb.ts:214
