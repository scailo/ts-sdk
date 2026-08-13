[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItemsSearchRequest

# Class: ProformaInvoiceItemsSearchRequest

Request payload structure used to search and filter Proforma Invoice Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.ProformaInvoiceItemsSearchRequest

## Hierarchy

- `Message`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

  ↳ **`ProformaInvoiceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ProformaInvoiceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ProformaInvoiceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ProformaInvoiceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ProformaInvoiceItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](ProformaInvoiceItemsSearchRequest.md#clientfamilycode)
- [clientUomId](ProformaInvoiceItemsSearchRequest.md#clientuomid)
- [count](ProformaInvoiceItemsSearchRequest.md#count)
- [entityUuid](ProformaInvoiceItemsSearchRequest.md#entityuuid)
- [familyId](ProformaInvoiceItemsSearchRequest.md#familyid)
- [isActive](ProformaInvoiceItemsSearchRequest.md#isactive)
- [offset](ProformaInvoiceItemsSearchRequest.md#offset)
- [proformaInvoiceId](ProformaInvoiceItemsSearchRequest.md#proformainvoiceid)
- [searchKey](ProformaInvoiceItemsSearchRequest.md#searchkey)
- [sortKey](ProformaInvoiceItemsSearchRequest.md#sortkey)
- [sortOrder](ProformaInvoiceItemsSearchRequest.md#sortorder)
- [status](ProformaInvoiceItemsSearchRequest.md#status)
- [taxGroupId](ProformaInvoiceItemsSearchRequest.md#taxgroupid)
- [fields](ProformaInvoiceItemsSearchRequest.md#fields)
- [runtime](ProformaInvoiceItemsSearchRequest.md#runtime)
- [typeName](ProformaInvoiceItemsSearchRequest.md#typename)

### Methods

- [clone](ProformaInvoiceItemsSearchRequest.md#clone)
- [equals](ProformaInvoiceItemsSearchRequest.md#equals)
- [fromBinary](ProformaInvoiceItemsSearchRequest.md#frombinary)
- [fromJson](ProformaInvoiceItemsSearchRequest.md#fromjson)
- [fromJsonString](ProformaInvoiceItemsSearchRequest.md#fromjsonstring)
- [getType](ProformaInvoiceItemsSearchRequest.md#gettype)
- [toBinary](ProformaInvoiceItemsSearchRequest.md#tobinary)
- [toJSON](ProformaInvoiceItemsSearchRequest.md#tojson)
- [toJson](ProformaInvoiceItemsSearchRequest.md#tojson-1)
- [toJsonString](ProformaInvoiceItemsSearchRequest.md#tojsonstring)
- [equals](ProformaInvoiceItemsSearchRequest.md#equals-1)
- [fromBinary](ProformaInvoiceItemsSearchRequest.md#frombinary-1)
- [fromJson](ProformaInvoiceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoiceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceItemsSearchRequest**(`data?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Overrides

Message\&lt;ProformaInvoiceItemsSearchRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4349)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4235](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4235)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4219](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4219)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4203](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4203)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4251](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4251)

___

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 25;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4315](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4315)

___

### clientUomId

• `Optional` **clientUomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific client Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 client_uom_id = 23;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4299](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4299)

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

[src/proforma_invoices.scailo_pb.ts:4123](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4123)

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

[src/proforma_invoices.scailo_pb.ts:4177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4177)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific family.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 21;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4283](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4283)

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

[src/proforma_invoices.scailo_pb.ts:4107](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4107)

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

[src/proforma_invoices.scailo_pb.ts:4139](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4139)

___

### proformaInvoiceId

• `Optional` **proformaInvoiceId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent proforma invoice.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 proforma_invoice_id = 20;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4267](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4267)

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

from field: optional string search_key = 40;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4347](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4347)

___

### sortKey

• `Optional` **sortKey**: [`PROFORMA_INVOICE_ITEM_SORT_KEY`](../enums/PROFORMA_INVOICE_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4161](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4161)

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

[src/proforma_invoices.scailo_pb.ts:4151](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4151)

___

### status

• `Optional` **status**: [`PROFORMA_INVOICE_ITEM_STATUS`](../enums/PROFORMA_INVOICE_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.PROFORMA_INVOICE_ITEM_STATUS status = 7;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4187](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4187)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter line items mapped to a specific tax group.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 tax_group_id = 27;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4331](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4331)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4356](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4356)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4354](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4354)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItemsSearchRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4355](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4355)

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4388](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4388)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4376](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4376)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4380](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4380)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemsSearchRequest`](ProformaInvoiceItemsSearchRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:4384](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L4384)
