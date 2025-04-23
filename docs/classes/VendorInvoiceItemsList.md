[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceItemsList

# Class: VendorInvoiceItemsList

Describes the message consisting of the list of vendor invoice items

**`Generated`**

from message Scailo.VendorInvoiceItemsList

## Hierarchy

- `Message`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\>

  ↳ **`VendorInvoiceItemsList`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceItemsList.md#constructor)

### Properties

- [list](VendorInvoiceItemsList.md#list)
- [fields](VendorInvoiceItemsList.md#fields)
- [runtime](VendorInvoiceItemsList.md#runtime)
- [typeName](VendorInvoiceItemsList.md#typename)

### Methods

- [clone](VendorInvoiceItemsList.md#clone)
- [equals](VendorInvoiceItemsList.md#equals)
- [fromBinary](VendorInvoiceItemsList.md#frombinary)
- [fromJson](VendorInvoiceItemsList.md#fromjson)
- [fromJsonString](VendorInvoiceItemsList.md#fromjsonstring)
- [getType](VendorInvoiceItemsList.md#gettype)
- [toBinary](VendorInvoiceItemsList.md#tobinary)
- [toJSON](VendorInvoiceItemsList.md#tojson)
- [toJson](VendorInvoiceItemsList.md#tojson-1)
- [toJsonString](VendorInvoiceItemsList.md#tojsonstring)
- [equals](VendorInvoiceItemsList.md#equals-1)
- [fromBinary](VendorInvoiceItemsList.md#frombinary-1)
- [fromJson](VendorInvoiceItemsList.md#fromjson-1)
- [fromJsonString](VendorInvoiceItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceItemsList**(`data?`): [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\> |

#### Returns

[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Overrides

Message\&lt;VendorInvoiceItemsList\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1330

## Properties

### list

• **list**: [`VendorInvoiceItem`](VendorInvoiceItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorInvoiceItem list = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1328

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1337

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1335

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceItemsList"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1336

## Methods

### clone

▸ **clone**(): [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

Create a deep copy.

#### Returns

[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md) \| `PlainMessage`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md) \| `PlainMessage`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\> |
| `b` | `undefined` \| [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md) \| `PlainMessage`\<[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1353

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1341

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1345

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemsList`](VendorInvoiceItemsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1349
