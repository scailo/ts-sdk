[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceCreateRequest

# Class: SalesQuotationsServiceCreateRequest

Request message for defining and creating a new Sales Quotation within the system.
This record acts as the foundational pre-sales document for proposing terms to a prospective buyer,
encapsulating proposed buyer and consignee relationships, estimated billing and shipping parameters,
financial adjustments (such as discounts, round-offs, and advance payments),
and project associations.

**Note:** This payload is typically utilized by Sales Representatives to initiate
the quotation and negotiation lifecycle before it is approved and presented to the client.

**`Generated`**

from message Scailo.SalesQuotationsServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

  ↳ **`SalesQuotationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesQuotationsServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesQuotationsServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesQuotationsServiceCreateRequest.md#currencyid)
- [entityUuid](SalesQuotationsServiceCreateRequest.md#entityuuid)
- [formData](SalesQuotationsServiceCreateRequest.md#formdata)
- [locationId](SalesQuotationsServiceCreateRequest.md#locationid)
- [miscellaneousCost](SalesQuotationsServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesQuotationsServiceCreateRequest.md#overalldiscount)
- [paymentAdvance](SalesQuotationsServiceCreateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesQuotationsServiceCreateRequest.md#paymentcycleindays)
- [projectId](SalesQuotationsServiceCreateRequest.md#projectid)
- [referenceId](SalesQuotationsServiceCreateRequest.md#referenceid)
- [roundOff](SalesQuotationsServiceCreateRequest.md#roundoff)
- [userComment](SalesQuotationsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesQuotationsServiceCreateRequest.md#vaultfolderid)
- [fields](SalesQuotationsServiceCreateRequest.md#fields)
- [runtime](SalesQuotationsServiceCreateRequest.md#runtime)
- [typeName](SalesQuotationsServiceCreateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceCreateRequest.md#clone)
- [equals](SalesQuotationsServiceCreateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceCreateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceCreateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceCreateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceCreateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceCreateRequest.md#tojson)
- [toJson](SalesQuotationsServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceCreateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceCreateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceCreateRequest**(`data?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L622)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L478)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L462)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L510)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L398)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L620)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) proposed to fulfill this quotation if converted.

**`Example`**

```ts
42
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L494)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., handling fees, freight charges) proposed for the quotation, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L542)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat discount amount applied across the entire quotation total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 overall_discount = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L558)

___

### paymentAdvance

• `Optional` **paymentAdvance**: `bigint`

**`Optional`**

**`Description`**

The monetary amount proposed to be paid in advance by the buyer upon conversion, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
10000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_advance = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L590)

___

### paymentCycleInDays

• `Optional` **paymentCycleInDays**: `bigint`

**`Optional`**

**`Description`**

The proposed payment term or credit cycle duration, measured in days from the invoice date.

**`Example`**

```ts
30
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L606)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L526)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L446)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount to align the final proposed total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L574)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L414)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_quotations.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L430)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:629](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L629)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L627)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceCreateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L628)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L659)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L647)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L651)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCreateRequest`](SalesQuotationsServiceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L655)
