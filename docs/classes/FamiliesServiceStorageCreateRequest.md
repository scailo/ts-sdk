[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceStorageCreateRequest

# Class: FamiliesServiceStorageCreateRequest

Describes the parameters necessary to create a family storage

**`Generated`**

from message Scailo.FamiliesServiceStorageCreateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\>

  ↳ **`FamiliesServiceStorageCreateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceStorageCreateRequest.md#constructor)

### Properties

- [familyId](FamiliesServiceStorageCreateRequest.md#familyid)
- [storageId](FamiliesServiceStorageCreateRequest.md#storageid)
- [userComment](FamiliesServiceStorageCreateRequest.md#usercomment)
- [fields](FamiliesServiceStorageCreateRequest.md#fields)
- [runtime](FamiliesServiceStorageCreateRequest.md#runtime)
- [typeName](FamiliesServiceStorageCreateRequest.md#typename)

### Methods

- [clone](FamiliesServiceStorageCreateRequest.md#clone)
- [equals](FamiliesServiceStorageCreateRequest.md#equals)
- [fromBinary](FamiliesServiceStorageCreateRequest.md#frombinary)
- [fromJson](FamiliesServiceStorageCreateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceStorageCreateRequest.md#fromjsonstring)
- [getType](FamiliesServiceStorageCreateRequest.md#gettype)
- [toBinary](FamiliesServiceStorageCreateRequest.md#tobinary)
- [toJSON](FamiliesServiceStorageCreateRequest.md#tojson)
- [toJson](FamiliesServiceStorageCreateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceStorageCreateRequest.md#tojsonstring)
- [equals](FamiliesServiceStorageCreateRequest.md#equals-1)
- [fromBinary](FamiliesServiceStorageCreateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceStorageCreateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceStorageCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceStorageCreateRequest**(`data?`): [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\> |

#### Returns

[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceStorageCreateRequest\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:2084

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/families.scailo_pb.ts:2075

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores the storage ID

**`Generated`**

from field: uint64 storage_id = 11;

#### Defined in

src/families.scailo_pb.ts:2082

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:2068

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2091

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2089

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceStorageCreateRequest"``

#### Defined in

src/families.scailo_pb.ts:2090

## Methods

### clone

▸ **clone**(): [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2109

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2097

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2101

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceStorageCreateRequest`](FamiliesServiceStorageCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:2105
