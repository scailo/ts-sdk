[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceSearchAllReq

# Class: ProformaInvoicesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ProformaInvoicesServiceSearchAllReq

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\>

  ↳ **`ProformaInvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](ProformaInvoicesServiceSearchAllReq.md#billingstatus)
- [buyerClientId](ProformaInvoicesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](ProformaInvoicesServiceSearchAllReq.md#consigneeclientid)
- [count](ProformaInvoicesServiceSearchAllReq.md#count)
- [entityUuid](ProformaInvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](ProformaInvoicesServiceSearchAllReq.md#isactive)
- [offset](ProformaInvoicesServiceSearchAllReq.md#offset)
- [refFrom](ProformaInvoicesServiceSearchAllReq.md#reffrom)
- [refId](ProformaInvoicesServiceSearchAllReq.md#refid)
- [searchKey](ProformaInvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](ProformaInvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](ProformaInvoicesServiceSearchAllReq.md#sortorder)
- [status](ProformaInvoicesServiceSearchAllReq.md#status)
- [fields](ProformaInvoicesServiceSearchAllReq.md#fields)
- [runtime](ProformaInvoicesServiceSearchAllReq.md#runtime)
- [typeName](ProformaInvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](ProformaInvoicesServiceSearchAllReq.md#clone)
- [equals](ProformaInvoicesServiceSearchAllReq.md#equals)
- [fromBinary](ProformaInvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](ProformaInvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](ProformaInvoicesServiceSearchAllReq.md#gettype)
- [toBinary](ProformaInvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](ProformaInvoicesServiceSearchAllReq.md#tojson)
- [toJson](ProformaInvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](ProformaInvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](ProformaInvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceSearchAllReq**(`data?`): [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\> |

#### Returns

[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:2337

## Properties

### billingStatus

• **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md) = `PROFORMA_INVOICE_BILLING_STATUS.PROFORMA_INVOICE_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the proforma invoice bill

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 40;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2320

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2335

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2328

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2257

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2285

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2250

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2264

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2306

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2313

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2299

___

### sortKey

• **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md) = `PROFORMA_INVOICE_SORT_KEY.PROFORMA_INVOICE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2278

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2271

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2292

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2344

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2342

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceSearchAllReq"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:2343

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2372

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2360

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2364

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceSearchAllReq`](ProformaInvoicesServiceSearchAllReq.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2368
