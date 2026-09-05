[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServicePaginationResponse

# Class: ProformaInvoicesServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.ProformaInvoicesServicePaginationResponse

## Hierarchy

- `Message`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\>

  ↳ **`ProformaInvoicesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServicePaginationResponse.md#constructor)

### Properties

- [count](ProformaInvoicesServicePaginationResponse.md#count)
- [offset](ProformaInvoicesServicePaginationResponse.md#offset)
- [payload](ProformaInvoicesServicePaginationResponse.md#payload)
- [total](ProformaInvoicesServicePaginationResponse.md#total)
- [fields](ProformaInvoicesServicePaginationResponse.md#fields)
- [runtime](ProformaInvoicesServicePaginationResponse.md#runtime)
- [typeName](ProformaInvoicesServicePaginationResponse.md#typename)

### Methods

- [clone](ProformaInvoicesServicePaginationResponse.md#clone)
- [equals](ProformaInvoicesServicePaginationResponse.md#equals)
- [fromBinary](ProformaInvoicesServicePaginationResponse.md#frombinary)
- [fromJson](ProformaInvoicesServicePaginationResponse.md#fromjson)
- [fromJsonString](ProformaInvoicesServicePaginationResponse.md#fromjsonstring)
- [getType](ProformaInvoicesServicePaginationResponse.md#gettype)
- [toBinary](ProformaInvoicesServicePaginationResponse.md#tobinary)
- [toJSON](ProformaInvoicesServicePaginationResponse.md#tojson)
- [toJson](ProformaInvoicesServicePaginationResponse.md#tojson-1)
- [toJsonString](ProformaInvoicesServicePaginationResponse.md#tojsonstring)
- [equals](ProformaInvoicesServicePaginationResponse.md#equals-1)
- [fromBinary](ProformaInvoicesServicePaginationResponse.md#frombinary-1)
- [fromJson](ProformaInvoicesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServicePaginationResponse**(`data?`): [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\> |

#### Returns

[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Overrides

Message\&lt;ProformaInvoicesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2774)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2744](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2744)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2754](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2754)

___

### payload

• **payload**: [`ProformaInvoice`](ProformaInvoice.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.ProformaInvoice payload = 4;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2772)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2764](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2764)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2781](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2781)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2779](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2779)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServicePaginationResponse"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2780](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2780)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2800](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2800)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2788](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2788)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2792](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2792)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginationResponse`](ProformaInvoicesServicePaginationResponse.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2796](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L2796)
