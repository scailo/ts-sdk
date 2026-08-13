[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrder

# Class: WorkOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.WorkOrder

## Hierarchy

- `Message`\<[`WorkOrder`](WorkOrder.md)\>

  ↳ **`WorkOrder`**

## Table of contents

### Constructors

- [constructor](WorkOrder.md#constructor)

### Properties

- [amendmentCount](WorkOrder.md#amendmentcount)
- [approvalMetadata](WorkOrder.md#approvalmetadata)
- [completedOn](WorkOrder.md#completedon)
- [entityUuid](WorkOrder.md#entityuuid)
- [finalRefNumber](WorkOrder.md#finalrefnumber)
- [formData](WorkOrder.md#formdata)
- [list](WorkOrder.md#list)
- [locationId](WorkOrder.md#locationid)
- [logs](WorkOrder.md#logs)
- [metadata](WorkOrder.md#metadata)
- [refFrom](WorkOrder.md#reffrom)
- [refId](WorkOrder.md#refid)
- [referenceId](WorkOrder.md#referenceid)
- [status](WorkOrder.md#status)
- [vaultFolderId](WorkOrder.md#vaultfolderid)
- [fields](WorkOrder.md#fields)
- [runtime](WorkOrder.md#runtime)
- [typeName](WorkOrder.md#typename)

### Methods

- [clone](WorkOrder.md#clone)
- [equals](WorkOrder.md#equals)
- [fromBinary](WorkOrder.md#frombinary)
- [fromJson](WorkOrder.md#fromjson)
- [fromJsonString](WorkOrder.md#fromjsonstring)
- [getType](WorkOrder.md#gettype)
- [toBinary](WorkOrder.md#tobinary)
- [toJSON](WorkOrder.md#tojson)
- [toJson](WorkOrder.md#tojson-1)
- [toJsonString](WorkOrder.md#tojsonstring)
- [equals](WorkOrder.md#equals-1)
- [fromBinary](WorkOrder.md#frombinary-1)
- [fromJson](WorkOrder.md#fromjson-1)
- [fromJsonString](WorkOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrder**(`data?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrder`](WorkOrder.md)\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Overrides

Message\&lt;WorkOrder\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L778)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

**`Description`**

The number of times that this record has been amended after approval.

**`Example`**

```ts
5
```

**`Generated`**

from field: uint64 amendment_count = 40;

#### Defined in

[src/work_orders.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L761)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/work_orders.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L674)

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

[src/work_orders.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L700)

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

[src/work_orders.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L658)

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

[src/work_orders.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L730)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/work_orders.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L776)

___

### list

• **list**: [`WorkOrderItem`](WorkOrderItem.md)[] = `[]`

The list of associated work order items

**`Generated`**

from field: repeated Scailo.WorkOrderItem list = 20;

#### Defined in

[src/work_orders.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L768)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/work_orders.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L751)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/work_orders.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L690)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/work_orders.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L666)

___

### refFrom

• **refFrom**: [`WORK_ORDER_REF_FROM`](../enums/WORK_ORDER_REF_FROM.md) = `WORK_ORDER_REF_FROM.WORK_ORDER_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.WORK_ORDER_REF_FROM ref_from = 12;

#### Defined in

[src/work_orders.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L737)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/work_orders.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L744)

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

[src/work_orders.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L720)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/work_orders.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L682)

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

[src/work_orders.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L710)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L785)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L783)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrder"``

#### Defined in

[src/work_orders.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L784)

## Methods

### clone

▸ **clone**(): [`WorkOrder`](WorkOrder.md)

Create a deep copy.

#### Returns

[`WorkOrder`](WorkOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`\<[`WorkOrder`](WorkOrder.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrder`](WorkOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrder`](WorkOrder.md)\>

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
| `a` | `undefined` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`\<[`WorkOrder`](WorkOrder.md)\> |
| `b` | `undefined` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`\<[`WorkOrder`](WorkOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L815)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L803)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L807)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L811)
