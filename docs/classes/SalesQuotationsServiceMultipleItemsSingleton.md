[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceMultipleItemsSingleton

# Class: SalesQuotationsServiceMultipleItemsSingleton

Represents a single line item payload within a bulk creation request.
Contains the exact same transactional parameters as a standard item creation request,
omitting the parent quotation ID which is declared once at the batch level.

**`Generated`**

from message Scailo.SalesQuotationsServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

  ↳ **`SalesQuotationsServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](SalesQuotationsServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](SalesQuotationsServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](SalesQuotationsServiceMultipleItemsSingleton.md#clientuomid)
- [deliveryDate](SalesQuotationsServiceMultipleItemsSingleton.md#deliverydate)
- [discount](SalesQuotationsServiceMultipleItemsSingleton.md#discount)
- [familyId](SalesQuotationsServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](SalesQuotationsServiceMultipleItemsSingleton.md#internalquantity)
- [specifications](SalesQuotationsServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](SalesQuotationsServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](SalesQuotationsServiceMultipleItemsSingleton.md#unitprice)
- [fields](SalesQuotationsServiceMultipleItemsSingleton.md#fields)
- [runtime](SalesQuotationsServiceMultipleItemsSingleton.md#runtime)
- [typeName](SalesQuotationsServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](SalesQuotationsServiceMultipleItemsSingleton.md#clone)
- [equals](SalesQuotationsServiceMultipleItemsSingleton.md#equals)
- [fromBinary](SalesQuotationsServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](SalesQuotationsServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](SalesQuotationsServiceMultipleItemsSingleton.md#gettype)
- [toBinary](SalesQuotationsServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](SalesQuotationsServiceMultipleItemsSingleton.md#tojson)
- [toJson](SalesQuotationsServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](SalesQuotationsServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](SalesQuotationsServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](SalesQuotationsServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceMultipleItemsSingleton**(`data?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;SalesQuotationsServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1725)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1643)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1627)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1611)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The specific proposed target delivery date for this line item, which may differ from the overall quotation's delivery schedule.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1707](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1707)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1691)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being quoted.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1579)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1595)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1723)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1675)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The proposed price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1659)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1732)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1730)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceMultipleItemsSingleton"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1731)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1757](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1757)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1745](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1745)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1749](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1749)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1753)
