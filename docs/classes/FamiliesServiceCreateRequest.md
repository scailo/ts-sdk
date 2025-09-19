[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceCreateRequest

# Class: FamiliesServiceCreateRequest

Describes the parameters necessary to create a record

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

[src/families.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L434)

## Properties

### code

• **code**: `string` = `""`

The unique code that represents the family

**`Generated`**

from field: string code = 12;

#### Defined in

[src/families.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L341)

___

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;

#### Defined in

[src/families.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L425)

___

### description

• **description**: `string` = `""`

The description of the family

**`Generated`**

from field: string description = 14;

#### Defined in

[src/families.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L348)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/families.scailo_pb.ts:306](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L306)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

[src/families.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L355)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/families.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L432)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 16;

#### Defined in

[src/families.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L362)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if the family is a leaf family

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

[src/families.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L390)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 21;

#### Defined in

[src/families.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L397)

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

Stores the minimum stock to maintain

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

[src/families.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L418)

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 10;

#### Defined in

[src/families.scailo_pb.ts:327](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L327)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family

**`Generated`**

from field: uint64 parent_id = 19;

#### Defined in

[src/families.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L383)

___

### price

• **price**: `bigint` = `protoInt64.zero`

Stores the unit price

**`Generated`**

from field: uint64 price = 26;

#### Defined in

[src/families.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L411)

___

### printName

• **printName**: `string` = `""`

The name of the family that is to be used on prints

**`Generated`**

from field: string print_name = 11;

#### Defined in

[src/families.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L334)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

[src/families.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L404)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

[src/families.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L376)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

[src/families.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L369)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/families.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L313)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/families.scailo_pb.ts:320](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L320)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L441)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L439)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceCreateRequest"``

#### Defined in

[src/families.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L440)

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

[src/families.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L475)

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

[src/families.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L463)

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

[src/families.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L467)

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

[src/families.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/families.scailo_pb.ts#L471)
