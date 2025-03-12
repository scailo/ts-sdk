[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceLabelCreateRequest

# Class: FamiliesServiceLabelCreateRequest

Describes the parameters necessary to create a family label

**`Generated`**

from message Scailo.FamiliesServiceLabelCreateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\>

  ↳ **`FamiliesServiceLabelCreateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceLabelCreateRequest.md#constructor)

### Properties

- [familyId](FamiliesServiceLabelCreateRequest.md#familyid)
- [labelId](FamiliesServiceLabelCreateRequest.md#labelid)
- [userComment](FamiliesServiceLabelCreateRequest.md#usercomment)
- [fields](FamiliesServiceLabelCreateRequest.md#fields)
- [runtime](FamiliesServiceLabelCreateRequest.md#runtime)
- [typeName](FamiliesServiceLabelCreateRequest.md#typename)

### Methods

- [clone](FamiliesServiceLabelCreateRequest.md#clone)
- [equals](FamiliesServiceLabelCreateRequest.md#equals)
- [fromBinary](FamiliesServiceLabelCreateRequest.md#frombinary)
- [fromJson](FamiliesServiceLabelCreateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceLabelCreateRequest.md#fromjsonstring)
- [getType](FamiliesServiceLabelCreateRequest.md#gettype)
- [toBinary](FamiliesServiceLabelCreateRequest.md#tobinary)
- [toJSON](FamiliesServiceLabelCreateRequest.md#tojson)
- [toJson](FamiliesServiceLabelCreateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceLabelCreateRequest.md#tojsonstring)
- [equals](FamiliesServiceLabelCreateRequest.md#equals-1)
- [fromBinary](FamiliesServiceLabelCreateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceLabelCreateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceLabelCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceLabelCreateRequest**(`data?`): [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\> |

#### Returns

[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceLabelCreateRequest\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:1853

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/families.scailo_pb.ts:1844

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores the label ID

**`Generated`**

from field: uint64 label_id = 11;

#### Defined in

src/families.scailo_pb.ts:1851

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:1837

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:1860

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:1858

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceLabelCreateRequest"``

#### Defined in

src/families.scailo_pb.ts:1859

## Methods

### clone

▸ **clone**(): [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:1878

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:1866

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:1870

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceLabelCreateRequest`](FamiliesServiceLabelCreateRequest.md)

#### Defined in

src/families.scailo_pb.ts:1874
