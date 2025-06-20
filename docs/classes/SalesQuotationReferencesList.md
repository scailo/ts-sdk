[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationReferencesList

# Class: SalesQuotationReferencesList

Describes the message consisting of the list of sales quotation references

**`Generated`**

from message Scailo.SalesQuotationReferencesList

## Hierarchy

- `Message`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\>

  ↳ **`SalesQuotationReferencesList`**

## Table of contents

### Constructors

- [constructor](SalesQuotationReferencesList.md#constructor)

### Properties

- [list](SalesQuotationReferencesList.md#list)
- [fields](SalesQuotationReferencesList.md#fields)
- [runtime](SalesQuotationReferencesList.md#runtime)
- [typeName](SalesQuotationReferencesList.md#typename)

### Methods

- [clone](SalesQuotationReferencesList.md#clone)
- [equals](SalesQuotationReferencesList.md#equals)
- [fromBinary](SalesQuotationReferencesList.md#frombinary)
- [fromJson](SalesQuotationReferencesList.md#fromjson)
- [fromJsonString](SalesQuotationReferencesList.md#fromjsonstring)
- [getType](SalesQuotationReferencesList.md#gettype)
- [toBinary](SalesQuotationReferencesList.md#tobinary)
- [toJSON](SalesQuotationReferencesList.md#tojson)
- [toJson](SalesQuotationReferencesList.md#tojson-1)
- [toJsonString](SalesQuotationReferencesList.md#tojsonstring)
- [equals](SalesQuotationReferencesList.md#equals-1)
- [fromBinary](SalesQuotationReferencesList.md#frombinary-1)
- [fromJson](SalesQuotationReferencesList.md#fromjson-1)
- [fromJsonString](SalesQuotationReferencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationReferencesList**(`data?`): [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\> |

#### Returns

[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Overrides

Message\&lt;SalesQuotationReferencesList\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:2550

## Properties

### list

• **list**: [`SalesQuotationReference`](SalesQuotationReference.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesQuotationReference list = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:2548

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:2557

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:2555

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationReferencesList"``

#### Defined in

src/sales_quotations.scailo_pb.ts:2556

## Methods

### clone

▸ **clone**(): [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

Create a deep copy.

#### Returns

[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md) \| `PlainMessage`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\>

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
| `a` | `undefined` \| [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md) \| `PlainMessage`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\> |
| `b` | `undefined` \| [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md) \| `PlainMessage`\<[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:2573

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2561

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2565

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationReferencesList`](SalesQuotationReferencesList.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2569
