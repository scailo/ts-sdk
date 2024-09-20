[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatch

# Class: GoodsDispatch

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.GoodsDispatch

## Hierarchy

- `Message`\<[`GoodsDispatch`](GoodsDispatch.md)\>

  ↳ **`GoodsDispatch`**

## Table of contents

### Constructors

- [constructor](GoodsDispatch.md#constructor)

### Properties

- [approvalMetadata](GoodsDispatch.md#approvalmetadata)
- [completedOn](GoodsDispatch.md#completedon)
- [entityUuid](GoodsDispatch.md#entityuuid)
- [finalRefNumber](GoodsDispatch.md#finalrefnumber)
- [formData](GoodsDispatch.md#formdata)
- [list](GoodsDispatch.md#list)
- [locationId](GoodsDispatch.md#locationid)
- [logs](GoodsDispatch.md#logs)
- [metadata](GoodsDispatch.md#metadata)
- [refFrom](GoodsDispatch.md#reffrom)
- [refId](GoodsDispatch.md#refid)
- [referenceId](GoodsDispatch.md#referenceid)
- [status](GoodsDispatch.md#status)
- [vaultFolderId](GoodsDispatch.md#vaultfolderid)
- [fields](GoodsDispatch.md#fields)
- [runtime](GoodsDispatch.md#runtime)
- [typeName](GoodsDispatch.md#typename)

### Methods

- [clone](GoodsDispatch.md#clone)
- [equals](GoodsDispatch.md#equals)
- [fromBinary](GoodsDispatch.md#frombinary)
- [fromJson](GoodsDispatch.md#fromjson)
- [fromJsonString](GoodsDispatch.md#fromjsonstring)
- [getType](GoodsDispatch.md#gettype)
- [toBinary](GoodsDispatch.md#tobinary)
- [toJSON](GoodsDispatch.md#tojson)
- [toJson](GoodsDispatch.md#tojson-1)
- [toJsonString](GoodsDispatch.md#tojsonstring)
- [equals](GoodsDispatch.md#equals-1)
- [fromBinary](GoodsDispatch.md#frombinary-1)
- [fromJson](GoodsDispatch.md#fromjson-1)
- [fromJsonString](GoodsDispatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatch**(`data?`): [`GoodsDispatch`](GoodsDispatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatch`](GoodsDispatch.md)\> |

#### Returns

[`GoodsDispatch`](GoodsDispatch.md)

#### Overrides

Message\&lt;GoodsDispatch\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:656

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/goods_dispatches.scailo_pb.ts:577

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this goods dispatch was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/goods_dispatches.scailo_pb.ts:598

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/goods_dispatches.scailo_pb.ts:563

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/goods_dispatches.scailo_pb.ts:619

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/goods_dispatches.scailo_pb.ts:654

___

### list

• **list**: [`GoodsDispatchItem`](GoodsDispatchItem.md)[] = `[]`

The list of associated goods dispatch items

**`Generated`**

from field: repeated Scailo.GoodsDispatchItem list = 20;

#### Defined in

src/goods_dispatches.scailo_pb.ts:647

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/goods_dispatches.scailo_pb.ts:640

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this goods dispatch

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/goods_dispatches.scailo_pb.ts:591

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goods dispatch

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/goods_dispatches.scailo_pb.ts:570

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/goods_dispatches.scailo_pb.ts:626

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/goods_dispatches.scailo_pb.ts:633

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods dispatch

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:612

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goods dispatch

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/goods_dispatches.scailo_pb.ts:584

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/goods_dispatches.scailo_pb.ts:605

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:663

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:661

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatch"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:662

## Methods

### clone

▸ **clone**(): [`GoodsDispatch`](GoodsDispatch.md)

Create a deep copy.

#### Returns

[`GoodsDispatch`](GoodsDispatch.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatch`](GoodsDispatch.md) \| `PlainMessage`\<[`GoodsDispatch`](GoodsDispatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatch`](GoodsDispatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatch`](GoodsDispatch.md)\>

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
| `a` | `undefined` \| [`GoodsDispatch`](GoodsDispatch.md) \| `PlainMessage`\<[`GoodsDispatch`](GoodsDispatch.md)\> |
| `b` | `undefined` \| [`GoodsDispatch`](GoodsDispatch.md) \| `PlainMessage`\<[`GoodsDispatch`](GoodsDispatch.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:692

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatch`](GoodsDispatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatch`](GoodsDispatch.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:680

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatch`](GoodsDispatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatch`](GoodsDispatch.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:684

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatch`](GoodsDispatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatch`](GoodsDispatch.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:688
