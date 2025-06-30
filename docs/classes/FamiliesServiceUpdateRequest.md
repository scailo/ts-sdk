[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateRequest

# Class: FamiliesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.FamiliesServiceUpdateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUpdateRequest`](FamiliesServiceUpdateRequest.md)\>

  ↳ **`FamiliesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUpdateRequest.md#constructor)

### Properties

- [code](FamiliesServiceUpdateRequest.md#code)
- [consumptionSequence](FamiliesServiceUpdateRequest.md#consumptionsequence)
- [description](FamiliesServiceUpdateRequest.md#description)
- [familyType](FamiliesServiceUpdateRequest.md#familytype)
- [formData](FamiliesServiceUpdateRequest.md#formdata)
- [hsnSacCode](FamiliesServiceUpdateRequest.md#hsnsaccode)
- [id](FamiliesServiceUpdateRequest.md#id)
- [isLeaf](FamiliesServiceUpdateRequest.md#isleaf)
- [ledgerId](FamiliesServiceUpdateRequest.md#ledgerid)
- [minStockToMaintain](FamiliesServiceUpdateRequest.md#minstocktomaintain)
- [name](FamiliesServiceUpdateRequest.md#name)
- [notifyUsers](FamiliesServiceUpdateRequest.md#notifyusers)
- [parentId](FamiliesServiceUpdateRequest.md#parentid)
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

src/families.scailo_pb.ts:627

## Properties

### code

• **code**: `string` = `""`

The unique code that represents the family (can be updated only prior to the first approval)

**`Generated`**

from field: string code = 12;

#### Defined in

src/families.scailo_pb.ts:534

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;

#### Defined in

src/families.scailo_pb.ts:618

___

### description

• **description**: `string` = `""`

The description of the family

**`Generated`**

from field: string description = 14;

#### Defined in

src/families.scailo_pb.ts:541

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family (can be updated only prior to the first approval)

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

src/families.scailo_pb.ts:548

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

src/families.scailo_pb.ts:625

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 16;

#### Defined in

src/families.scailo_pb.ts:555

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/families.scailo_pb.ts:499

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if the family is a leaf family (can be updated only prior to the first approval)

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

src/families.scailo_pb.ts:583

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 21;

#### Defined in

src/families.scailo_pb.ts:590

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

Stores the minimum stock to maintain

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

src/families.scailo_pb.ts:611

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 10;

#### Defined in

src/families.scailo_pb.ts:520

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/families.scailo_pb.ts:506

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family (can be updated only prior to the first approval)

**`Generated`**

from field: uint64 parent_id = 19;

#### Defined in

src/families.scailo_pb.ts:576

___

### price

• **price**: `bigint` = `protoInt64.zero`

Stores the unit price

**`Generated`**

from field: uint64 price = 26;

#### Defined in

src/families.scailo_pb.ts:604

___

### printName

• **printName**: `string` = `""`

The name of the family that is to be used on prints

**`Generated`**

from field: string print_name = 11;

#### Defined in

src/families.scailo_pb.ts:527

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

src/families.scailo_pb.ts:597

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

src/families.scailo_pb.ts:569

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

src/families.scailo_pb.ts:562

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:492

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/families.scailo_pb.ts:513

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:634

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:632

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateRequest"``

#### Defined in

src/families.scailo_pb.ts:633

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

src/families.scailo_pb.ts:669

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

src/families.scailo_pb.ts:657

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

src/families.scailo_pb.ts:661

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

src/families.scailo_pb.ts:665
