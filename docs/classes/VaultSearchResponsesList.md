[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultSearchResponsesList

# Class: VaultSearchResponsesList

Describes the message consisting of the list of vault search response

**`Generated`**

from message Scailo.VaultSearchResponsesList

## Hierarchy

- `Message`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\>

  ↳ **`VaultSearchResponsesList`**

## Table of contents

### Constructors

- [constructor](VaultSearchResponsesList.md#constructor)

### Properties

- [list](VaultSearchResponsesList.md#list)
- [fields](VaultSearchResponsesList.md#fields)
- [runtime](VaultSearchResponsesList.md#runtime)
- [typeName](VaultSearchResponsesList.md#typename)

### Methods

- [clone](VaultSearchResponsesList.md#clone)
- [equals](VaultSearchResponsesList.md#equals)
- [fromBinary](VaultSearchResponsesList.md#frombinary)
- [fromJson](VaultSearchResponsesList.md#fromjson)
- [fromJsonString](VaultSearchResponsesList.md#fromjsonstring)
- [getType](VaultSearchResponsesList.md#gettype)
- [toBinary](VaultSearchResponsesList.md#tobinary)
- [toJSON](VaultSearchResponsesList.md#tojson)
- [toJson](VaultSearchResponsesList.md#tojson-1)
- [toJsonString](VaultSearchResponsesList.md#tojsonstring)
- [equals](VaultSearchResponsesList.md#equals-1)
- [fromBinary](VaultSearchResponsesList.md#frombinary-1)
- [fromJson](VaultSearchResponsesList.md#fromjson-1)
- [fromJsonString](VaultSearchResponsesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultSearchResponsesList**(`data?`): [`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\> |

#### Returns

[`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Overrides

Message\&lt;VaultSearchResponsesList\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:1240

## Properties

### list

• **list**: [`VaultSearchResponse`](VaultSearchResponse.md)[] = `[]`

List of search responses

**`Generated`**

from field: repeated Scailo.VaultSearchResponse list = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:1238

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:1247

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:1245

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultSearchResponsesList"``

#### Defined in

src/vault_commons.scailo_pb.ts:1246

## Methods

### clone

▸ **clone**(): [`VaultSearchResponsesList`](VaultSearchResponsesList.md)

Create a deep copy.

#### Returns

[`VaultSearchResponsesList`](VaultSearchResponsesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultSearchResponsesList`](VaultSearchResponsesList.md) \| `PlainMessage`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\>

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
| `a` | `undefined` \| [`VaultSearchResponsesList`](VaultSearchResponsesList.md) \| `PlainMessage`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\> |
| `b` | `undefined` \| [`VaultSearchResponsesList`](VaultSearchResponsesList.md) \| `PlainMessage`\<[`VaultSearchResponsesList`](VaultSearchResponsesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:1263

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1251

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1255

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchResponsesList`](VaultSearchResponsesList.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1259
