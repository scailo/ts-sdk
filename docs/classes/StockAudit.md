[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAudit

# Class: StockAudit

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.StockAudit

## Hierarchy

- `Message`\<[`StockAudit`](StockAudit.md)\>

  ↳ **`StockAudit`**

## Table of contents

### Constructors

- [constructor](StockAudit.md#constructor)

### Properties

- [approvalMetadata](StockAudit.md#approvalmetadata)
- [completedOn](StockAudit.md#completedon)
- [entityUuid](StockAudit.md#entityuuid)
- [finalRefNumber](StockAudit.md#finalrefnumber)
- [formData](StockAudit.md#formdata)
- [list](StockAudit.md#list)
- [locationId](StockAudit.md#locationid)
- [logs](StockAudit.md#logs)
- [metadata](StockAudit.md#metadata)
- [referenceId](StockAudit.md#referenceid)
- [status](StockAudit.md#status)
- [vaultFolderId](StockAudit.md#vaultfolderid)
- [fields](StockAudit.md#fields)
- [runtime](StockAudit.md#runtime)
- [typeName](StockAudit.md#typename)

### Methods

- [clone](StockAudit.md#clone)
- [equals](StockAudit.md#equals)
- [fromBinary](StockAudit.md#frombinary)
- [fromJson](StockAudit.md#fromjson)
- [fromJsonString](StockAudit.md#fromjsonstring)
- [getType](StockAudit.md#gettype)
- [toBinary](StockAudit.md#tobinary)
- [toJSON](StockAudit.md#tojson)
- [toJson](StockAudit.md#tojson-1)
- [toJsonString](StockAudit.md#tojsonstring)
- [equals](StockAudit.md#equals-1)
- [fromBinary](StockAudit.md#frombinary-1)
- [fromJson](StockAudit.md#fromjson-1)
- [fromJsonString](StockAudit.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAudit**(`data?`): [`StockAudit`](StockAudit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAudit`](StockAudit.md)\> |

#### Returns

[`StockAudit`](StockAudit.md)

#### Overrides

Message\&lt;StockAudit\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:467

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:402

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this stock audit was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/stock_audits.scailo_pb.ts:423

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:388

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:444

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/stock_audits.scailo_pb.ts:465

___

### list

• **list**: [`StockAuditItem`](StockAuditItem.md)[] = `[]`

The list of associated stock audit items

**`Generated`**

from field: repeated Scailo.StockAuditItem list = 20;

#### Defined in

src/stock_audits.scailo_pb.ts:458

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:451

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this stock audit

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/stock_audits.scailo_pb.ts:416

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock audit

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:395

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock audit

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:437

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock audit

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:409

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/stock_audits.scailo_pb.ts:430

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:474

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:472

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAudit"``

#### Defined in

src/stock_audits.scailo_pb.ts:473

## Methods

### clone

▸ **clone**(): [`StockAudit`](StockAudit.md)

Create a deep copy.

#### Returns

[`StockAudit`](StockAudit.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAudit`](StockAudit.md) \| `PlainMessage`\<[`StockAudit`](StockAudit.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAudit`](StockAudit.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAudit`](StockAudit.md)\>

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
| `a` | `undefined` \| [`StockAudit`](StockAudit.md) \| `PlainMessage`\<[`StockAudit`](StockAudit.md)\> |
| `b` | `undefined` \| [`StockAudit`](StockAudit.md) \| `PlainMessage`\<[`StockAudit`](StockAudit.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:501

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAudit`](StockAudit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAudit`](StockAudit.md)

#### Defined in

src/stock_audits.scailo_pb.ts:489

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAudit`](StockAudit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAudit`](StockAudit.md)

#### Defined in

src/stock_audits.scailo_pb.ts:493

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAudit`](StockAudit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAudit`](StockAudit.md)

#### Defined in

src/stock_audits.scailo_pb.ts:497
