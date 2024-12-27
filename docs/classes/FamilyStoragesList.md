[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyStoragesList

# Class: FamilyStoragesList

Describes the message consisting of the list of family storages

**`Generated`**

from message Scailo.FamilyStoragesList

## Hierarchy

- `Message`\<[`FamilyStoragesList`](FamilyStoragesList.md)\>

  ↳ **`FamilyStoragesList`**

## Table of contents

### Constructors

- [constructor](FamilyStoragesList.md#constructor)

### Properties

- [list](FamilyStoragesList.md#list)
- [fields](FamilyStoragesList.md#fields)
- [runtime](FamilyStoragesList.md#runtime)
- [typeName](FamilyStoragesList.md#typename)

### Methods

- [clone](FamilyStoragesList.md#clone)
- [equals](FamilyStoragesList.md#equals)
- [fromBinary](FamilyStoragesList.md#frombinary)
- [fromJson](FamilyStoragesList.md#fromjson)
- [fromJsonString](FamilyStoragesList.md#fromjsonstring)
- [getType](FamilyStoragesList.md#gettype)
- [toBinary](FamilyStoragesList.md#tobinary)
- [toJSON](FamilyStoragesList.md#tojson)
- [toJson](FamilyStoragesList.md#tojson-1)
- [toJsonString](FamilyStoragesList.md#tojsonstring)
- [equals](FamilyStoragesList.md#equals-1)
- [fromBinary](FamilyStoragesList.md#frombinary-1)
- [fromJson](FamilyStoragesList.md#fromjson-1)
- [fromJsonString](FamilyStoragesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyStoragesList**(`data?`): [`FamilyStoragesList`](FamilyStoragesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyStoragesList`](FamilyStoragesList.md)\> |

#### Returns

[`FamilyStoragesList`](FamilyStoragesList.md)

#### Overrides

Message\&lt;FamilyStoragesList\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:2079

## Properties

### list

• **list**: [`FamilyStorage`](FamilyStorage.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.FamilyStorage list = 1;

#### Defined in

src/families.scailo_pb.ts:2077

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2086

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2084

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyStoragesList"``

#### Defined in

src/families.scailo_pb.ts:2085

## Methods

### clone

▸ **clone**(): [`FamilyStoragesList`](FamilyStoragesList.md)

Create a deep copy.

#### Returns

[`FamilyStoragesList`](FamilyStoragesList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyStoragesList`](FamilyStoragesList.md) \| `PlainMessage`\<[`FamilyStoragesList`](FamilyStoragesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyStoragesList`](FamilyStoragesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyStoragesList`](FamilyStoragesList.md)\>

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
| `a` | `undefined` \| [`FamilyStoragesList`](FamilyStoragesList.md) \| `PlainMessage`\<[`FamilyStoragesList`](FamilyStoragesList.md)\> |
| `b` | `undefined` \| [`FamilyStoragesList`](FamilyStoragesList.md) \| `PlainMessage`\<[`FamilyStoragesList`](FamilyStoragesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2102

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyStoragesList`](FamilyStoragesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyStoragesList`](FamilyStoragesList.md)

#### Defined in

src/families.scailo_pb.ts:2090

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyStoragesList`](FamilyStoragesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyStoragesList`](FamilyStoragesList.md)

#### Defined in

src/families.scailo_pb.ts:2094

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyStoragesList`](FamilyStoragesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyStoragesList`](FamilyStoragesList.md)

#### Defined in

src/families.scailo_pb.ts:2098
