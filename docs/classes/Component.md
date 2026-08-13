[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Component

# Class: Component

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Component

## Hierarchy

- `Message`\<[`Component`](Component.md)\>

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](Component.md#constructor)

### Properties

- [code](Component.md#code)
- [consumedOrRejectedAt](Component.md#consumedorrejectedat)
- [description](Component.md#description)
- [discardedAt](Component.md#discardedat)
- [entityUuid](Component.md#entityuuid)
- [familyId](Component.md#familyid)
- [formData](Component.md#formdata)
- [hash](Component.md#hash)
- [internalItemCode](Component.md#internalitemcode)
- [isQcReportPublic](Component.md#isqcreportpublic)
- [locationId](Component.md#locationid)
- [logs](Component.md#logs)
- [metadata](Component.md#metadata)
- [parentRefId](Component.md#parentrefid)
- [quantity](Component.md#quantity)
- [quantityRemaining](Component.md#quantityremaining)
- [refFrom](Component.md#reffrom)
- [refId](Component.md#refid)
- [remainingDimensions](Component.md#remainingdimensions)
- [returnedOrScrappedAt](Component.md#returnedorscrappedat)
- [reworkEndAt](Component.md#reworkendat)
- [reworkStartAt](Component.md#reworkstartat)
- [secondaryQuantity](Component.md#secondaryquantity)
- [secondaryUomId](Component.md#secondaryuomid)
- [shelfLifeTimestamp](Component.md#shelflifetimestamp)
- [shortUrl](Component.md#shorturl)
- [status](Component.md#status)
- [storageId](Component.md#storageid)
- [storeId](Component.md#storeid)
- [storeIntakeAt](Component.md#storeintakeat)
- [vaultFolderId](Component.md#vaultfolderid)
- [warrantyTimestamp](Component.md#warrantytimestamp)
- [fields](Component.md#fields)
- [runtime](Component.md#runtime)
- [typeName](Component.md#typename)

### Methods

- [clone](Component.md#clone)
- [equals](Component.md#equals)
- [fromBinary](Component.md#frombinary)
- [fromJson](Component.md#fromjson)
- [fromJsonString](Component.md#fromjsonstring)
- [getType](Component.md#gettype)
- [toBinary](Component.md#tobinary)
- [toJSON](Component.md#tojson)
- [toJson](Component.md#tojson-1)
- [toJsonString](Component.md#tojsonstring)
- [equals](Component.md#equals-1)
- [fromBinary](Component.md#frombinary-1)
- [fromJson](Component.md#fromjson-1)
- [fromJsonString](Component.md#fromjsonstring-1)

## Constructors

### constructor

• **new Component**(`data?`): [`Component`](Component.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Component`](Component.md)\> |

#### Returns

[`Component`](Component.md)

#### Overrides

Message\&lt;Component\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L784)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the component

**`Generated`**

from field: string code = 34;

#### Defined in

[src/components.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L669)

___

### consumedOrRejectedAt

• **consumedOrRejectedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either consumed or rejected

**`Generated`**

from field: uint64 consumed_or_rejected_at = 11;

#### Defined in

[src/components.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L599)

___

### description

• **description**: `string` = `""`

The description of the component

**`Generated`**

from field: string description = 60;

#### Defined in

[src/components.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L767)

___

### discardedAt

• **discardedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was discarded

**`Generated`**

from field: uint64 discarded_at = 15;

#### Defined in

[src/components.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L627)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/components.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L564)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L662)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 80;

#### Defined in

[src/components.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L782)

___

### hash

• **hash**: `string` = `""`

The computed hash of the component

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/components.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L683)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L676)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L746)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L753)

___

### logs

• **logs**: [`LogbookLogInventoryLC`](LogbookLogInventoryLC.md)[] = `[]`

Stores the logs of every operation performed on this component

**`Generated`**

from field: repeated Scailo.LogbookLogInventoryLC logs = 5;

#### Defined in

[src/components.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L585)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this component

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/components.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L571)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item (if applicable)

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L641)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/components.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L690)

___

### quantityRemaining

• **quantityRemaining**: `bigint` = `protoInt64.zero`

Stores the remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining = 38;

#### Defined in

[src/components.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L697)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L648)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L655)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/components.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L760)

___

### returnedOrScrappedAt

• **returnedOrScrappedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either returned or scrapped

**`Generated`**

from field: uint64 returned_or_scrapped_at = 14;

#### Defined in

[src/components.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L620)

___

### reworkEndAt

• **reworkEndAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process ended

**`Generated`**

from field: uint64 rework_end_at = 13;

#### Defined in

[src/components.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L613)

___

### reworkStartAt

• **reworkStartAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process began

**`Generated`**

from field: uint64 rework_start_at = 12;

#### Defined in

[src/components.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L606)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of component

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/components.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L711)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L704)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/components.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L718)

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 70;

#### Defined in

[src/components.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L774)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 4;

#### Defined in

[src/components.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L578)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L739)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L732)

___

### storeIntakeAt

• **storeIntakeAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was admitted into store

**`Generated`**

from field: uint64 store_intake_at = 10;

#### Defined in

[src/components.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L592)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/components.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L634)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/components.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L725)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L791)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L789)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Component"``

#### Defined in

[src/components.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L790)

## Methods

### clone

▸ **clone**(): [`Component`](Component.md)

Create a deep copy.

#### Returns

[`Component`](Component.md)

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
| `other` | `undefined` \| ``null`` \| [`Component`](Component.md) \| `PlainMessage`\<[`Component`](Component.md)\> |

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

▸ **getType**(): `MessageType`\<[`Component`](Component.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Component`](Component.md)\>

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
| `a` | `undefined` \| [`Component`](Component.md) \| `PlainMessage`\<[`Component`](Component.md)\> |
| `b` | `undefined` \| [`Component`](Component.md) \| `PlainMessage`\<[`Component`](Component.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L838)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Component`](Component.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Component`](Component.md)

#### Defined in

[src/components.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L826)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Component`](Component.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Component`](Component.md)

#### Defined in

[src/components.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L830)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Component`](Component.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Component`](Component.md)

#### Defined in

[src/components.scailo_pb.ts:834](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L834)
