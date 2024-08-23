[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceCreateRequest

# Class: HolidaysServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.HolidaysServiceCreateRequest

## Hierarchy

- `Message`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

  ↳ **`HolidaysServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceCreateRequest.md#constructor)

### Properties

- [description](HolidaysServiceCreateRequest.md#description)
- [endOn](HolidaysServiceCreateRequest.md#endon)
- [entityUuid](HolidaysServiceCreateRequest.md#entityuuid)
- [startOn](HolidaysServiceCreateRequest.md#starton)
- [title](HolidaysServiceCreateRequest.md#title)
- [userComment](HolidaysServiceCreateRequest.md#usercomment)
- [vaultFolderId](HolidaysServiceCreateRequest.md#vaultfolderid)
- [fields](HolidaysServiceCreateRequest.md#fields)
- [runtime](HolidaysServiceCreateRequest.md#runtime)
- [typeName](HolidaysServiceCreateRequest.md#typename)

### Methods

- [clone](HolidaysServiceCreateRequest.md#clone)
- [equals](HolidaysServiceCreateRequest.md#equals)
- [fromBinary](HolidaysServiceCreateRequest.md#frombinary)
- [fromJson](HolidaysServiceCreateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceCreateRequest.md#fromjsonstring)
- [getType](HolidaysServiceCreateRequest.md#gettype)
- [toBinary](HolidaysServiceCreateRequest.md#tobinary)
- [toJSON](HolidaysServiceCreateRequest.md#tojson)
- [toJson](HolidaysServiceCreateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceCreateRequest.md#tojsonstring)
- [equals](HolidaysServiceCreateRequest.md#equals-1)
- [fromBinary](HolidaysServiceCreateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceCreateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceCreateRequest**(`data?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Overrides

Message\&lt;HolidaysServiceCreateRequest\&gt;.constructor

#### Defined in

src/holidays.scailo_pb.ts:171

## Properties

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 11;

#### Defined in

src/holidays.scailo_pb.ts:155

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

src/holidays.scailo_pb.ts:169

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/holidays.scailo_pb.ts:127

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

src/holidays.scailo_pb.ts:162

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 10;

#### Defined in

src/holidays.scailo_pb.ts:148

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/holidays.scailo_pb.ts:134

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/holidays.scailo_pb.ts:141

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/holidays.scailo_pb.ts:178

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/holidays.scailo_pb.ts:176

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceCreateRequest"``

#### Defined in

src/holidays.scailo_pb.ts:177

## Methods

### clone

▸ **clone**(): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md) \| `PlainMessage`\<[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/holidays.scailo_pb.ts:200

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:188

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:192

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCreateRequest`](HolidaysServiceCreateRequest.md)

#### Defined in

src/holidays.scailo_pb.ts:196
