[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceUpdateRequest

# Class: SalesOrdersServiceUpdateRequest

Request message for updating an existing Sales Order record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
of an established Sales Order.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.SalesOrdersServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesOrdersServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesOrdersServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesOrdersServiceUpdateRequest.md#currencyid)
- [formData](SalesOrdersServiceUpdateRequest.md#formdata)
- [id](SalesOrdersServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesOrdersServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesOrdersServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesOrdersServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](SalesOrdersServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesOrdersServiceUpdateRequest.md#paymentcycleindays)
- [projectId](SalesOrdersServiceUpdateRequest.md#projectid)
- [referenceId](SalesOrdersServiceUpdateRequest.md#referenceid)
- [roundOff](SalesOrdersServiceUpdateRequest.md#roundoff)
- [userComment](SalesOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesOrdersServiceUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceUpdateRequest.md#clone)
- [equals](SalesOrdersServiceUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceUpdateRequest**(`data?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L935)

## Properties

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the buyer client (the entity financially responsible for the order).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 buyer_client_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L807)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the consignee client (the entity physically receiving the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 consignee_client_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L791)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this order.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 currency_id = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L823)

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

[src/sales_orders.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L933)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L731)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., handling fees, freight charges) applied to the order, represented in the base currency subunit (e.g., cents).

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

[src/sales_orders.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L855)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L743)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat discount amount applied across the entire order total, represented in the base currency subunit (e.g., cents).

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

[src/sales_orders.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L871)

___

### paymentAdvance

• `Optional` **paymentAdvance**: `bigint`

**`Optional`**

**`Description`**

The monetary amount paid in advance by the buyer prior to fulfillment, represented in the base currency subunit (e.g., cents).

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

[src/sales_orders.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L903)

___

### paymentCycleInDays

• `Optional` **paymentCycleInDays**: `bigint`

**`Optional`**

**`Description`**

The agreed-upon payment term or credit cycle duration, measured in days from the invoice date.

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

[src/sales_orders.scailo_pb.ts:919](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L919)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track sales revenue and fulfillment against specific long-term initiatives.

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

[src/sales_orders.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L839)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: optional string reference_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L775)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.

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

[src/sales_orders.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L887)

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

from field: optional string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:715](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L715)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_orders.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L759)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:942](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L942)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L940)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceUpdateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L941)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L972)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L960)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L964)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceUpdateRequest`](SalesOrdersServiceUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L968)
