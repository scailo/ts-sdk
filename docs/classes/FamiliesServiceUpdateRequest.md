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

[src/families.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L626)

## Properties

### consumptionSequence

• **consumptionSequence**: [`CONSUMPTION_SEQUENCE`](../enums/CONSUMPTION_SEQUENCE.md) = `CONSUMPTION_SEQUENCE.CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED`

Stores the consumption sequence

**`Generated`**

from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;

#### Defined in

[src/families.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L617)

___

### description

• **description**: `string` = `""`

The description of the family

**`Generated`**

from field: string description = 14;

#### Defined in

[src/families.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L561)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/families.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L624)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

The HSN/SAC code of the family

**`Generated`**

from field: string hsn_sac_code = 16;

#### Defined in

[src/families.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L568)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/families.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L517)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

Stores the ID of the ledger

**`Generated`**

from field: uint64 ledger_id = 21;

#### Defined in

[src/families.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L589)

___

### minStockToMaintain

• **minStockToMaintain**: `bigint` = `protoInt64.zero`

Stores the minimum stock to maintain

**`Generated`**

from field: uint64 min_stock_to_maintain = 27;

#### Defined in

[src/families.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L610)

___

### name

• **name**: `string` = `""`

The name of the family

**`Generated`**

from field: string name = 10;

#### Defined in

[src/families.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L547)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/families.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L524)

___

### price

• **price**: `bigint` = `protoInt64.zero`

Stores the unit price

**`Generated`**

from field: uint64 price = 26;

#### Defined in

[src/families.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L603)

___

### printName

• **printName**: `string` = `""`

The name of the family that is to be used on prints

**`Generated`**

from field: string print_name = 11;

#### Defined in

[src/families.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L554)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

[src/families.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L596)

___

### unitQuantity

• **unitQuantity**: `bigint` = `protoInt64.zero`

Stores the unit quantity

**`Generated`**

from field: uint64 unit_quantity = 18;

#### Defined in

[src/families.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L582)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 17;

#### Defined in

[src/families.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L575)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L510)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/families.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L540)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L633)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:631](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L631)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateRequest"``

#### Defined in

[src/families.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L632)

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

[src/families.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L664)

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

[src/families.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L652)

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

[src/families.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L656)

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

[src/families.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L660)
