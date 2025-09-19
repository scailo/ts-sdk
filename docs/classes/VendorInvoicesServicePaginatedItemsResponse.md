[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServicePaginatedItemsResponse

# Class: VendorInvoicesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.VendorInvoicesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\>

  ↳ **`VendorInvoicesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](VendorInvoicesServicePaginatedItemsResponse.md#count)
- [offset](VendorInvoicesServicePaginatedItemsResponse.md#offset)
- [payload](VendorInvoicesServicePaginatedItemsResponse.md#payload)
- [total](VendorInvoicesServicePaginatedItemsResponse.md#total)
- [fields](VendorInvoicesServicePaginatedItemsResponse.md#fields)
- [runtime](VendorInvoicesServicePaginatedItemsResponse.md#runtime)
- [typeName](VendorInvoicesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](VendorInvoicesServicePaginatedItemsResponse.md#clone)
- [equals](VendorInvoicesServicePaginatedItemsResponse.md#equals)
- [fromBinary](VendorInvoicesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](VendorInvoicesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](VendorInvoicesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](VendorInvoicesServicePaginatedItemsResponse.md#gettype)
- [toBinary](VendorInvoicesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](VendorInvoicesServicePaginatedItemsResponse.md#tojson)
- [toJson](VendorInvoicesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](VendorInvoicesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](VendorInvoicesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](VendorInvoicesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](VendorInvoicesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](VendorInvoicesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServicePaginatedItemsResponse**(`data?`): [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\> |

#### Returns

[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;VendorInvoicesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2733](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2733)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2710)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2717)

___

### payload

• **payload**: [`VendorInvoiceItem`](VendorInvoiceItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.VendorInvoiceItem payload = 4;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2731)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2724)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2740](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2740)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2738)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServicePaginatedItemsResponse"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2739)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2759)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2747)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2751](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2751)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginatedItemsResponse`](VendorInvoicesServicePaginatedItemsResponse.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2755)
