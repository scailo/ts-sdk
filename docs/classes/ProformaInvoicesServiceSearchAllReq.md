[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceSearchAllReq

# Class: ProformaInvoicesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating proforma invoices via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

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

[src/proforma_invoices.scailo_pb.ts:4049](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4049)

## Properties

### billingStatus

• `Optional` **billingStatus**: [`PROFORMA_INVOICE_BILLING_STATUS`](../enums/PROFORMA_INVOICE_BILLING_STATUS.md)

**`Optional`**

**`Description`**

Filter proforma invoices based on their financial conversion lifecycle state—specifically, whether they remain as preliminary estimates (unbilled) or have been formally converted into finalized Sales Invoices (billed).

**`Example`**

```ts
PROFORMA_INVOICE_BILLING_STATUS_UNBILLED
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_BILLING_STATUS enum value.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_BILLING_STATUS billing_status = 40;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4015](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4015)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 51;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4047](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4047)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter proforma invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 50;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4031)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3885](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3885)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 6;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3939](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3939)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3869](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3869)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3901](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3901)

___

### refFrom

• `Optional` **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md)

**`Optional`**

**`Description`**

The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).

**`Example`**

```ts
"PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3983](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3983)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 ref_id = 23;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3999](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3999)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3967](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3967)

___

### sortKey

• `Optional` **sortKey**: [`PROFORMA_INVOICE_SORT_KEY`](../enums/PROFORMA_INVOICE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3923](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3923)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3913](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3913)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:3951](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L3951)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4056](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4056)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4054](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4054)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceSearchAllReq"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4055](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4055)

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

[src/proforma_invoices.scailo_pb.ts:4084](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4084)

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

[src/proforma_invoices.scailo_pb.ts:4072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4072)

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

[src/proforma_invoices.scailo_pb.ts:4076](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4076)

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

[src/proforma_invoices.scailo_pb.ts:4080](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4080)
