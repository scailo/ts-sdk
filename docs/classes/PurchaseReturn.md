[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturn

# Class: PurchaseReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PurchaseReturn

## Hierarchy

- `Message`\<[`PurchaseReturn`](PurchaseReturn.md)\>

  ↳ **`PurchaseReturn`**

## Table of contents

### Constructors

- [constructor](PurchaseReturn.md#constructor)

### Properties

- [approvalMetadata](PurchaseReturn.md#approvalmetadata)
- [completedOn](PurchaseReturn.md#completedon)
- [entityUuid](PurchaseReturn.md#entityuuid)
- [finalRefNumber](PurchaseReturn.md#finalrefnumber)
- [formData](PurchaseReturn.md#formdata)
- [list](PurchaseReturn.md#list)
- [locationId](PurchaseReturn.md#locationid)
- [logs](PurchaseReturn.md#logs)
- [metadata](PurchaseReturn.md#metadata)
- [refFrom](PurchaseReturn.md#reffrom)
- [refId](PurchaseReturn.md#refid)
- [referenceId](PurchaseReturn.md#referenceid)
- [status](PurchaseReturn.md#status)
- [vaultFolderId](PurchaseReturn.md#vaultfolderid)
- [fields](PurchaseReturn.md#fields)
- [runtime](PurchaseReturn.md#runtime)
- [typeName](PurchaseReturn.md#typename)

### Methods

- [clone](PurchaseReturn.md#clone)
- [equals](PurchaseReturn.md#equals)
- [fromBinary](PurchaseReturn.md#frombinary)
- [fromJson](PurchaseReturn.md#fromjson)
- [fromJsonString](PurchaseReturn.md#fromjsonstring)
- [getType](PurchaseReturn.md#gettype)
- [toBinary](PurchaseReturn.md#tobinary)
- [toJSON](PurchaseReturn.md#tojson)
- [toJson](PurchaseReturn.md#tojson-1)
- [toJsonString](PurchaseReturn.md#tojsonstring)
- [equals](PurchaseReturn.md#equals-1)
- [fromBinary](PurchaseReturn.md#frombinary-1)
- [fromJson](PurchaseReturn.md#fromjson-1)
- [fromJsonString](PurchaseReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturn**(`data?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Overrides

Message\&lt;PurchaseReturn\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:540

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/purchases_returns.scailo_pb.ts:461

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this purchase return was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/purchases_returns.scailo_pb.ts:482

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:447

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/purchases_returns.scailo_pb.ts:503

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/purchases_returns.scailo_pb.ts:538

___

### list

• **list**: [`PurchaseReturnItem`](PurchaseReturnItem.md)[] = `[]`

The list of associated purchase return items

**`Generated`**

from field: repeated Scailo.PurchaseReturnItem list = 20;

#### Defined in

src/purchases_returns.scailo_pb.ts:531

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/purchases_returns.scailo_pb.ts:524

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase return

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/purchases_returns.scailo_pb.ts:475

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase return

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:454

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/purchases_returns.scailo_pb.ts:510

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/purchases_returns.scailo_pb.ts:517

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:496

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/purchases_returns.scailo_pb.ts:468

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/purchases_returns.scailo_pb.ts:489

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:547

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:545

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseReturn"``

#### Defined in

src/purchases_returns.scailo_pb.ts:546

## Methods

### clone

▸ **clone**(): [`PurchaseReturn`](PurchaseReturn.md)

Create a deep copy.

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseReturn`](PurchaseReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseReturn`](PurchaseReturn.md)\>

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
| `a` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |
| `b` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:576

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:564

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:568

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:572
