[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceCreateRequest

# Class: StoresServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.StoresServiceCreateRequest

## Hierarchy

- `Message`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

  ↳ **`StoresServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](StoresServiceCreateRequest.md#constructor)

### Properties

- [code](StoresServiceCreateRequest.md#code)
- [description](StoresServiceCreateRequest.md#description)
- [entityUuid](StoresServiceCreateRequest.md#entityuuid)
- [inchargeUsername](StoresServiceCreateRequest.md#inchargeusername)
- [locationId](StoresServiceCreateRequest.md#locationid)
- [name](StoresServiceCreateRequest.md#name)
- [phone](StoresServiceCreateRequest.md#phone)
- [userComment](StoresServiceCreateRequest.md#usercomment)
- [fields](StoresServiceCreateRequest.md#fields)
- [runtime](StoresServiceCreateRequest.md#runtime)
- [typeName](StoresServiceCreateRequest.md#typename)

### Methods

- [clone](StoresServiceCreateRequest.md#clone)
- [equals](StoresServiceCreateRequest.md#equals)
- [fromBinary](StoresServiceCreateRequest.md#frombinary)
- [fromJson](StoresServiceCreateRequest.md#fromjson)
- [fromJsonString](StoresServiceCreateRequest.md#fromjsonstring)
- [getType](StoresServiceCreateRequest.md#gettype)
- [toBinary](StoresServiceCreateRequest.md#tobinary)
- [toJSON](StoresServiceCreateRequest.md#tojson)
- [toJson](StoresServiceCreateRequest.md#tojson-1)
- [toJsonString](StoresServiceCreateRequest.md#tojsonstring)
- [equals](StoresServiceCreateRequest.md#equals-1)
- [fromBinary](StoresServiceCreateRequest.md#frombinary-1)
- [fromJson](StoresServiceCreateRequest.md#fromjson-1)
- [fromJsonString](StoresServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceCreateRequest**(`data?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Overrides

Message\&lt;StoresServiceCreateRequest\&gt;.constructor

#### Defined in

src/stores.scailo_pb.ts:148

## Properties

### code

• **code**: `string` = `""`

The unique code by which the store is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/stores.scailo_pb.ts:125

___

### description

• **description**: `string` = `""`

The description of the store

**`Generated`**

from field: string description = 12;

#### Defined in

src/stores.scailo_pb.ts:132

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/stores.scailo_pb.ts:97

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

The username of the incharge

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

src/stores.scailo_pb.ts:139

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 9;

#### Defined in

src/stores.scailo_pb.ts:111

___

### name

• **name**: `string` = `""`

The name of the store

**`Generated`**

from field: string name = 10;

#### Defined in

src/stores.scailo_pb.ts:118

___

### phone

• **phone**: `string` = `""`

The contact number of the store

**`Generated`**

from field: string phone = 14;

#### Defined in

src/stores.scailo_pb.ts:146

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/stores.scailo_pb.ts:104

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stores.scailo_pb.ts:155

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stores.scailo_pb.ts:153

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceCreateRequest"``

#### Defined in

src/stores.scailo_pb.ts:154

## Methods

### clone

▸ **clone**(): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stores.scailo_pb.ts:178

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

src/stores.scailo_pb.ts:166

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

src/stores.scailo_pb.ts:170

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

src/stores.scailo_pb.ts:174
