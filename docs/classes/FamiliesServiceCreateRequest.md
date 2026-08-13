[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceCreateRequest

# Class: FamiliesServiceCreateRequest

Request message for defining and creating a new Family profile within the catalog.
This record tracks critical hierarchical metadata, classification types, taxation codes,
pricing configurations, and inventory consumption rules associated with a target entity.

**Note:** This is the primary entry point for Inventory Managers, Catalog Administrators,
and Procurement to register new item families and structural classifications for inventory tracking and compliance.

**`Generated`**

from message Scailo.FamiliesServiceCreateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\>

  ↳ **`FamiliesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceCreateRequest.md#constructor)

### Properties

- [code](FamiliesServiceCreateRequest.md#code)
- [consumptionSequence](FamiliesServiceCreateRequest.md#consumptionsequence)
- [description](FamiliesServiceCreateRequest.md#description)
- [entityUuid](FamiliesServiceCreateRequest.md#entityuuid)
- [familyType](FamiliesServiceCreateRequest.md#familytype)
- [formData](FamiliesServiceCreateRequest.md#formdata)
- [hsnSacCode](FamiliesServiceCreateRequest.md#hsnsaccode)
- [isLeaf](FamiliesServiceCreateRequest.md#isleaf)
- [ledgerId](FamiliesServiceCreateRequest.md#ledgerid)
- [minStockToMaintain](FamiliesServiceCreateRequest.md#minstocktomaintain)
- [name](FamiliesServiceCreateRequest.md#name)
- [parentId](FamiliesServiceCreateRequest.md#parentid)
- [price](FamiliesServiceCreateRequest.md#price)
- [printName](FamiliesServiceCreateRequest.md#printname)
- [taxGroupId](FamiliesServiceCreateRequest.md#taxgroupid)
- [unitQuantity](FamiliesServiceCreateRequest.md#unitquantity)
- [uomId](FamiliesServiceCreateRequest.md#uomid)
- [userComment](FamiliesServiceCreateRequest.md#usercomment)
- [vaultFolderId](FamiliesServiceCreateRequest.md#vaultfolderid)
- [fields](FamiliesServiceCreateRequest.md#fields)
- [runtime](FamiliesServiceCreateRequest.md#runtime)
- [typeName](FamiliesServiceCreateRequest.md#typename)

### Methods

- [clone](FamiliesServiceCreateRequest.md#clone)
- [equals](FamiliesServiceCreateRequest.md#equals)
- [fromBinary](FamiliesServiceCreateRequest.md#frombinary)
- [fromJson](FamiliesServiceCreateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceCreateRequest.md#fromjsonstring)
- [getType](FamiliesServiceCreateRequest.md#gettype)
- [toBinary](FamiliesServiceCreateRequest.md#tobinary)
- [toJSON](FamiliesServiceCreateRequest.md#tojson)
- [toJson](FamiliesServiceCreateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceCreateRequest.md#tojsonstring)
- [equals](FamiliesServiceCreateRequest.md#equals-1)
- [fromBinary](FamiliesServiceCreateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceCreateRequest**(`data?`): [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\> |

#### Returns

[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L619)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the family.

**`Example`**

```ts
"FAM-IND-FST-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 12;

#### Defined in

[src/families.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L411)

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).

**`Example`**

```ts
"CONSUMPTION_SEQUENCE_FIFO_INTAKE"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid CONSUMPTION_SEQUENCE enum value string or integer.

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;

#### Defined in

[src/families.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L603)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A detailed text description outlining the characteristics, specifications, and purpose of the family.

**`Example`**

```ts
"Heavy duty industrial fasteners suitable for high-stress applications."
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 14;

#### Defined in

[src/families.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L427)

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

[src/families.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L331)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product).

**`Example`**

```ts
"FAMILY_TYPE_COMPONENT"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid FAMILY_TYPE enum value string or integer.

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

[src/families.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L443)

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

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/families.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L617)

___

### hsnSacCode

• `Optional` **hsnSacCode**: `string`

**`Optional`**

**`Description`**

The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.

**`Example`**

```ts
"73181500"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string hsn_sac_code = 16;

#### Defined in

[src/families.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L459)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Mandatory`**

**`Description`**

A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families).

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

[src/families.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L523)

___

### ledgerId

• `Optional` **ledgerId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.

**`Example`**

```ts
452
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 ledger_id = 21;

#### Defined in

[src/families.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L539)

___

### minStockToMaintain

• `Optional` **minStockToMaintain**: `bigint`

**`Optional`**

**`Description`**

The minimum inventory threshold required to be maintained for items within this family, commonly used to trigger automated restock alerts.

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 min_stock_to_maintain = 27;

#### Defined in

[src/families.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L587)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary, human-readable name of the family.

**`Example`**

```ts
"Industrial Fasteners"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/families.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L379)

___

### parentId

• `Optional` **parentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 parent_id = 19;

#### Defined in

[src/families.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L507)

___

### price

• `Optional` **price**: `bigint`

**`Optional`**

**`Description`**

The default base unit price for items in this family, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1550
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 price = 26;

#### Defined in

[src/families.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L571)

___

### printName

• **printName**: `string` = `""`

**`Mandatory`**

**`Description`**

The designated name of the family utilized for external-facing documents, invoices, and printed reports.

**`Example`**

```ts
"Ind. Fasteners"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string print_name = 11;

#### Defined in

[src/families.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L395)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the default tax group applied to items nested under this family.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

[src/families.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L555)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The standard batch or unit quantity multiplier for items within this family, represented in base subunits.

**`Example`**

```ts
100
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

[src/families.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L491)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the unit of material (UOM) used to measure items within this family.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

[src/families.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L475)

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

[src/families.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L347)

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

[src/families.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L363)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L626)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L624)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceCreateRequest"``

#### Defined in

[src/families.scailo_pb.ts:625](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L625)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L660)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L648)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L652)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceCreateRequest`](FamiliesServiceCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L656)
