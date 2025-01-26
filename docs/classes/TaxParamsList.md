[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsList

# Class: TaxParamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.TaxParamsList

## Hierarchy

- `Message`\<[`TaxParamsList`](TaxParamsList.md)\>

  ↳ **`TaxParamsList`**

## Table of contents

### Constructors

- [constructor](TaxParamsList.md#constructor)

### Properties

- [list](TaxParamsList.md#list)
- [fields](TaxParamsList.md#fields)
- [runtime](TaxParamsList.md#runtime)
- [typeName](TaxParamsList.md#typename)

### Methods

- [clone](TaxParamsList.md#clone)
- [equals](TaxParamsList.md#equals)
- [fromBinary](TaxParamsList.md#frombinary)
- [fromJson](TaxParamsList.md#fromjson)
- [fromJsonString](TaxParamsList.md#fromjsonstring)
- [getType](TaxParamsList.md#gettype)
- [toBinary](TaxParamsList.md#tobinary)
- [toJSON](TaxParamsList.md#tojson)
- [toJson](TaxParamsList.md#tojson-1)
- [toJsonString](TaxParamsList.md#tojsonstring)
- [equals](TaxParamsList.md#equals-1)
- [fromBinary](TaxParamsList.md#frombinary-1)
- [fromJson](TaxParamsList.md#fromjson-1)
- [fromJsonString](TaxParamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsList**(`data?`): [`TaxParamsList`](TaxParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsList`](TaxParamsList.md)\> |

#### Returns

[`TaxParamsList`](TaxParamsList.md)

#### Overrides

Message\&lt;TaxParamsList\&gt;.constructor

#### Defined in

src/tax_params.scailo_pb.ts:559

## Properties

### list

• **list**: [`TaxParam`](TaxParam.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.TaxParam list = 1;

#### Defined in

src/tax_params.scailo_pb.ts:557

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_params.scailo_pb.ts:566

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_params.scailo_pb.ts:564

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsList"``

#### Defined in

src/tax_params.scailo_pb.ts:565

## Methods

### clone

▸ **clone**(): [`TaxParamsList`](TaxParamsList.md)

Create a deep copy.

#### Returns

[`TaxParamsList`](TaxParamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsList`](TaxParamsList.md) \| `PlainMessage`\<[`TaxParamsList`](TaxParamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsList`](TaxParamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsList`](TaxParamsList.md)\>

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
| `a` | `undefined` \| [`TaxParamsList`](TaxParamsList.md) \| `PlainMessage`\<[`TaxParamsList`](TaxParamsList.md)\> |
| `b` | `undefined` \| [`TaxParamsList`](TaxParamsList.md) \| `PlainMessage`\<[`TaxParamsList`](TaxParamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_params.scailo_pb.ts:582

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsList`](TaxParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsList`](TaxParamsList.md)

#### Defined in

src/tax_params.scailo_pb.ts:570

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsList`](TaxParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsList`](TaxParamsList.md)

#### Defined in

src/tax_params.scailo_pb.ts:574

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsList`](TaxParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsList`](TaxParamsList.md)

#### Defined in

src/tax_params.scailo_pb.ts:578
