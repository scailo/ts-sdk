[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAudit

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

[src/stock_audits.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L536)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_audits.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L457)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/stock_audits.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L483)

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

[src/stock_audits.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L441)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/stock_audits.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L513)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/stock_audits.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L534)

___

### list

• **list**: [`StockAuditItem`](StockAuditItem.md)[] = `[]`

The list of associated stock audit items

**`Generated`**

from field: repeated Scailo.StockAuditItem list = 20;

#### Defined in

[src/stock_audits.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L527)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/stock_audits.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L520)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stock_audits.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L473)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_audits.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L449)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_audits.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L503)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stock_audits.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L465)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_audits.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L493)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_audits.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L543)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_audits.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L541)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAudit"``

#### Defined in

[src/stock_audits.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L542)

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

[src/stock_audits.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L570)

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

[src/stock_audits.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L558)

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

[src/stock_audits.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L562)

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

[src/stock_audits.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_audits.scailo_pb.ts#L566)
