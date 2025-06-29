[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Family

# Class: Family

Describes the parameters that are part of a family structure

**`Generated`**

from message Scailo.Family

## Hierarchy

- `Message`\<[`Family`](Family.md)\>

  ↳ **`Family`**

## Table of contents

### Constructors

- [constructor](Family.md#constructor)

### Properties

- [amendmentCount](Family.md#amendmentcount)
- [approvalMetadata](Family.md#approvalmetadata)
- [code](Family.md#code)
- [consumptionSequence](Family.md#consumptionsequence)
- [description](Family.md#description)
- [drawingNumber](Family.md#drawingnumber)
- [entityUuid](Family.md#entityuuid)
- [familyType](Family.md#familytype)
- [formData](Family.md#formdata)
- [hsnSacCode](Family.md#hsnsaccode)
- [isLeaf](Family.md#isleaf)
- [ledgerId](Family.md#ledgerid)
- [logs](Family.md#logs)
- [metadata](Family.md#metadata)
- [minStockToMaintain](Family.md#minstocktomaintain)
- [name](Family.md#name)
- [parentId](Family.md#parentid)
- [price](Family.md#price)
- [printName](Family.md#printname)
- [status](Family.md#status)
- [taxGroupId](Family.md#taxgroupid)
- [unitQuantity](Family.md#unitquantity)
- [uomId](Family.md#uomid)
- [vaultFolderId](Family.md#vaultfolderid)
- [fields](Family.md#fields)
- [runtime](Family.md#runtime)
- [typeName](Family.md#typename)

### Methods

- [clone](Family.md#clone)
- [equals](Family.md#equals)
- [fromBinary](Family.md#frombinary)
- [fromJson](Family.md#fromjson)
- [fromJsonString](Family.md#fromjsonstring)
- [getType](Family.md#gettype)
- [toBinary](Family.md#tobinary)
- [toJSON](Family.md#tojson)
- [toJson](Family.md#tojson-1)
- [toJsonString](Family.md#tojsonstring)
- [equals](Family.md#equals-1)
- [fromBinary](Family.md#frombinary-1)
- [fromJson](Family.md#fromjson-1)
- [fromJsonString](Family.md#fromjsonstring-1)

## Constructors

### constructor

• **new Family**(`data?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Family`](Family.md)\> |

#### Returns

[`Family`](Family.md)

#### Overrides

Message\&lt;Family\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:873

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the family has been amended

**`Generated`**

from field: uint64 amendment_count = 40;

#### Defined in

src/families.scailo_pb.ts:864

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/families.scailo_pb.ts:724

___

### code

• **code**: `string` = `""`

The unique code that represents the family

**`Generated`**

from field: string code = 12;

#### Defined in

src/families.scailo_pb.ts:766

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 29;

#### Defined in

src/families.scailo_pb.ts:857

___

### description

• **description**: `string` = `""`

The description of the family

**`Generated`**

from field: string description = 14;

#### Defined in

src/families.scailo_pb.ts:780

___

### drawingNumber

• **drawingNumber**: `string` = `""`

The drawing number of the family

**`Generated`**

from field: string drawing_number = 13;

#### Defined in

src/families.scailo_pb.ts:773

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/families.scailo_pb.ts:710

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

src/families.scailo_pb.ts:787

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

src/families.scailo_pb.ts:871

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 16;

#### Defined in

src/families.scailo_pb.ts:794

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if the family is a leaf family

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

src/families.scailo_pb.ts:822

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 21;

#### Defined in

src/families.scailo_pb.ts:829

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase order

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/families.scailo_pb.ts:738

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this family

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/families.scailo_pb.ts:717

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

Stores the minimum stock to maintain

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

src/families.scailo_pb.ts:850

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 10;

#### Defined in

src/families.scailo_pb.ts:752

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family

**`Generated`**

from field: uint64 parent_id = 19;

#### Defined in

src/families.scailo_pb.ts:815

___

### price

• **price**: `bigint` = `protoInt64.zero`

Stores the unit price

**`Generated`**

from field: uint64 price = 26;

#### Defined in

src/families.scailo_pb.ts:843

___

### printName

• **printName**: `string` = `""`

The name of the family that is to be used on prints

**`Generated`**

from field: string print_name = 11;

#### Defined in

src/families.scailo_pb.ts:759

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this family

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/families.scailo_pb.ts:731

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

src/families.scailo_pb.ts:836

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

src/families.scailo_pb.ts:808

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

src/families.scailo_pb.ts:801

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/families.scailo_pb.ts:745

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:880

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:878

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Family"``

#### Defined in

src/families.scailo_pb.ts:879

## Methods

### clone

▸ **clone**(): [`Family`](Family.md)

Create a deep copy.

#### Returns

[`Family`](Family.md)

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
| `other` | `undefined` \| ``null`` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |

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

▸ **getType**(): `MessageType`\<[`Family`](Family.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Family`](Family.md)\>

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
| `a` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |
| `b` | `undefined` \| [`Family`](Family.md) \| `PlainMessage`\<[`Family`](Family.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:919

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

src/families.scailo_pb.ts:907

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

src/families.scailo_pb.ts:911

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Family`](Family.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Family`](Family.md)

#### Defined in

src/families.scailo_pb.ts:915
