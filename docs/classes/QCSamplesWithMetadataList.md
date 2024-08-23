[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesWithMetadataList

# Class: QCSamplesWithMetadataList

Describes the message consisting of the list of QC samples with metadata

**`Generated`**

from message Scailo.QCSamplesWithMetadataList

## Hierarchy

- `Message`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\>

  ↳ **`QCSamplesWithMetadataList`**

## Table of contents

### Constructors

- [constructor](QCSamplesWithMetadataList.md#constructor)

### Properties

- [list](QCSamplesWithMetadataList.md#list)
- [fields](QCSamplesWithMetadataList.md#fields)
- [runtime](QCSamplesWithMetadataList.md#runtime)
- [typeName](QCSamplesWithMetadataList.md#typename)

### Methods

- [clone](QCSamplesWithMetadataList.md#clone)
- [equals](QCSamplesWithMetadataList.md#equals)
- [fromBinary](QCSamplesWithMetadataList.md#frombinary)
- [fromJson](QCSamplesWithMetadataList.md#fromjson)
- [fromJsonString](QCSamplesWithMetadataList.md#fromjsonstring)
- [getType](QCSamplesWithMetadataList.md#gettype)
- [toBinary](QCSamplesWithMetadataList.md#tobinary)
- [toJSON](QCSamplesWithMetadataList.md#tojson)
- [toJson](QCSamplesWithMetadataList.md#tojson-1)
- [toJsonString](QCSamplesWithMetadataList.md#tojsonstring)
- [equals](QCSamplesWithMetadataList.md#equals-1)
- [fromBinary](QCSamplesWithMetadataList.md#frombinary-1)
- [fromJson](QCSamplesWithMetadataList.md#fromjson-1)
- [fromJsonString](QCSamplesWithMetadataList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesWithMetadataList**(`data?`): [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\> |

#### Returns

[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Overrides

Message\&lt;QCSamplesWithMetadataList\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:816

## Properties

### list

• **list**: [`QCSampleWithMetadata`](QCSampleWithMetadata.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCSampleWithMetadata list = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:814

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:823

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:821

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesWithMetadataList"``

#### Defined in

src/qc_samples.scailo_pb.ts:822

## Methods

### clone

▸ **clone**(): [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

Create a deep copy.

#### Returns

[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md) \| `PlainMessage`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\>

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
| `a` | `undefined` \| [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md) \| `PlainMessage`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\> |
| `b` | `undefined` \| [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md) \| `PlainMessage`\<[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:839

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:827

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:831

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesWithMetadataList`](QCSamplesWithMetadataList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:835
