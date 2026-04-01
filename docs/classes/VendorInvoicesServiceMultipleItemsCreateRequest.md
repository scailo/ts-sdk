[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceMultipleItemsCreateRequest

# Class: VendorInvoicesServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a vendor invoice

**`Generated`**

from message Scailo.VendorInvoicesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`VendorInvoicesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](VendorInvoicesServiceMultipleItemsCreateRequest.md#list)
- [userComment](VendorInvoicesServiceMultipleItemsCreateRequest.md#usercomment)
- [vendorInvoiceId](VendorInvoicesServiceMultipleItemsCreateRequest.md#vendorinvoiceid)
- [fields](VendorInvoicesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](VendorInvoicesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](VendorInvoicesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceMultipleItemsCreateRequest.md#clone)
- [equals](VendorInvoicesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](VendorInvoicesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceMultipleItemsCreateRequest**(`data?`): [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1198)

## Properties

### list

• **list**: [`VendorInvoicesServiceMultipleItemsSingleton`](VendorInvoicesServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.VendorInvoicesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1196)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1182)

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1189)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1205)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1203)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1204)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1223)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1211)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1215)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceMultipleItemsCreateRequest`](VendorInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendor_invoices.scailo_pb.ts#L1219)
