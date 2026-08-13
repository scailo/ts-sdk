[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatch

# Class: GoodsDispatch

Represents a complete, formalized Goods Dispatch entity within the system.
This message encapsulates the comprehensive state of a physical fulfillment operation.
It acts as the definitive logistical record that tracks the picking, packing, and outbound shipping
of products to a buyer.

**Note:** This payload is typically utilized in read operations (e.g., View, Search)
and provides frontend clients, warehouse management systems (WMS), and downstream billing APIs
with the entire context needed to generate packing slips, deduct physical inventory,
and subsequently generate a finalized Sales Invoice for the dispatched quantities.

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

[src/goods_dispatches.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L909)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L801)

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

[src/goods_dispatches.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L827)

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

[src/goods_dispatches.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L785)

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

[src/goods_dispatches.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L857)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L907)

___

### list

• **list**: [`GoodsDispatchItem`](GoodsDispatchItem.md)[] = `[]`

**`Description`**

The complete, aggregated list of individual line items that constitute this goods dispatch.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of GoodsDispatchItem message blocks.

**`Generated`**

from field: repeated Scailo.GoodsDispatchItem list = 20;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L899)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the physical location, warehouse, or fulfillment center from which these goods are being picked, packed, and dispatched.

**`Example`**

```ts
42
```

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L887)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L817)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L793)

___

### refFrom

• **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md) = `GOODS_DISPATCH_REF_FROM.GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED`

**`Description`**

The specific module or record type from which this physical fulfillment operation originates (e.g., Sales Order).

**`Example`**

```ts
"GOODS_DISPATCH_REF_FROM_SALES_ORDER"
```

**`Generated`**

from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L867)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order dictating this fulfillment).

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L877)

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

[src/goods_dispatches.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L847)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L809)

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

[src/goods_dispatches.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L837)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L916)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L914)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatch"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L915)

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

[src/goods_dispatches.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L945)

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

[src/goods_dispatches.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L933)

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

[src/goods_dispatches.scailo_pb.ts:937](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L937)

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

[src/goods_dispatches.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L941)
