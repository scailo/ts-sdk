[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateRequest

# Class: FamiliesServiceUpdateRequest

Request message for updating an existing Family record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, print name, description, hsn sac code, uom id, unit quantity, ledger id, tax group id, price, min stock to maintain, consumption sequence and other custom form fields
of an established Family.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.FamiliesServiceUpdateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\>

  ↳ **`FamiliesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUpdateRequest.md#constructor)

### Properties

- [consumptionSequence](FamiliesServiceUpdateRequest.md#consumptionsequence)
- [description](FamiliesServiceUpdateRequest.md#description)
- [formData](FamiliesServiceUpdateRequest.md#formdata)
- [hsnSacCode](FamiliesServiceUpdateRequest.md#hsnsaccode)
- [id](FamiliesServiceUpdateRequest.md#id)
- [ledgerId](FamiliesServiceUpdateRequest.md#ledgerid)
- [minStockToMaintain](FamiliesServiceUpdateRequest.md#minstocktomaintain)
- [name](FamiliesServiceUpdateRequest.md#name)
- [notifyUsers](FamiliesServiceUpdateRequest.md#notifyusers)
- [price](FamiliesServiceUpdateRequest.md#price)
- [printName](FamiliesServiceUpdateRequest.md#printname)
- [taxGroupId](FamiliesServiceUpdateRequest.md#taxgroupid)
- [unitQuantity](FamiliesServiceUpdateRequest.md#unitquantity)
- [uomId](FamiliesServiceUpdateRequest.md#uomid)
- [userComment](FamiliesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](FamiliesServiceUpdateRequest.md#vaultfolderid)
- [fields](FamiliesServiceUpdateRequest.md#fields)
- [runtime](FamiliesServiceUpdateRequest.md#runtime)
- [typeName](FamiliesServiceUpdateRequest.md#typename)

### Methods

- [clone](FamiliesServiceUpdateRequest.md#clone)
- [equals](FamiliesServiceUpdateRequest.md#equals)
- [fromBinary](FamiliesServiceUpdateRequest.md#frombinary)
- [fromJson](FamiliesServiceUpdateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUpdateRequest.md#fromjsonstring)
- [getType](FamiliesServiceUpdateRequest.md#gettype)
- [toBinary](FamiliesServiceUpdateRequest.md#tobinary)
- [toJSON](FamiliesServiceUpdateRequest.md#tojson)
- [toJson](FamiliesServiceUpdateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUpdateRequest.md#tojsonstring)
- [equals](FamiliesServiceUpdateRequest.md#equals-1)
- [fromBinary](FamiliesServiceUpdateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUpdateRequest**(`data?`): [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\> |

#### Returns

[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:928](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L928)

## Properties

### consumptionSequence

• `Optional` **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md)

**`Optional`**

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

from field: optional Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;

#### Defined in

[src/families.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L912)

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

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 14;

#### Defined in

[src/families.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L784)

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

[src/families.scailo_pb.ts:926](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L926)

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

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string hsn_sac_code = 16;

#### Defined in

[src/families.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L800)

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

[src/families.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L708)

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

[src/families.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L848)

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

[src/families.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L896)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the family.

**`Example`**

```ts
"Industrial Fasteners"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/families.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L752)

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

[src/families.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L720)

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

[src/families.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L880)

___

### printName

• `Optional` **printName**: `string`

**`Optional`**

**`Description`**

The designated name of the family utilized for external-facing documents, invoices, and printed reports.

**`Example`**

```ts
"Ind. Fasteners"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string print_name = 11;

#### Defined in

[src/families.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L768)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

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

from field: optional uint64 tax_group_id = 23;

#### Defined in

[src/families.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L864)

___

### unitQuantity

• `Optional` **unitQuantity**: `bigint`

**`Optional`**

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

from field: optional uint64 unit_quantity = 18;

#### Defined in

[src/families.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L832)

___

### uomId

• `Optional` **uomId**: `bigint`

**`Optional`**

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

from field: optional uint64 uom_id = 17;

#### Defined in

[src/families.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L816)

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

[src/families.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L692)

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

[src/families.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L736)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L935)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L933)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateRequest"``

#### Defined in

[src/families.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L934)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L966)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L954)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L958)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L962)
