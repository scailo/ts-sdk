[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceReferencesList

# Class: VendorInvoiceReferencesList

Describes the message consisting of the list of vendor invoice references

**`Generated`**

from message Scailo.VendorInvoiceReferencesList

## Hierarchy

- `Message`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\>

  ↳ **`VendorInvoiceReferencesList`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceReferencesList.md#constructor)

### Properties

- [list](VendorInvoiceReferencesList.md#list)
- [fields](VendorInvoiceReferencesList.md#fields)
- [runtime](VendorInvoiceReferencesList.md#runtime)
- [typeName](VendorInvoiceReferencesList.md#typename)

### Methods

- [clone](VendorInvoiceReferencesList.md#clone)
- [equals](VendorInvoiceReferencesList.md#equals)
- [fromBinary](VendorInvoiceReferencesList.md#frombinary)
- [fromJson](VendorInvoiceReferencesList.md#fromjson)
- [fromJsonString](VendorInvoiceReferencesList.md#fromjsonstring)
- [getType](VendorInvoiceReferencesList.md#gettype)
- [toBinary](VendorInvoiceReferencesList.md#tobinary)
- [toJSON](VendorInvoiceReferencesList.md#tojson)
- [toJson](VendorInvoiceReferencesList.md#tojson-1)
- [toJsonString](VendorInvoiceReferencesList.md#tojsonstring)
- [equals](VendorInvoiceReferencesList.md#equals-1)
- [fromBinary](VendorInvoiceReferencesList.md#frombinary-1)
- [fromJson](VendorInvoiceReferencesList.md#fromjson-1)
- [fromJsonString](VendorInvoiceReferencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceReferencesList**(`data?`): [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\> |

#### Returns

[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Overrides

Message\&lt;VendorInvoiceReferencesList\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2384

## Properties

### list

• **list**: [`VendorInvoiceReference`](VendorInvoiceReference.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorInvoiceReference list = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2382

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2391

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2389

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceReferencesList"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2390

## Methods

### clone

▸ **clone**(): [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

Create a deep copy.

#### Returns

[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md) \| `PlainMessage`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md) \| `PlainMessage`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\> |
| `b` | `undefined` \| [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md) \| `PlainMessage`\<[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2407

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2395

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2399

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReferencesList`](VendorInvoiceReferencesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2403
