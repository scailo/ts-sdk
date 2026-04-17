[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ABSENCE\_SORT\_KEY

# Enumeration: ABSENCE\_SORT\_KEY

Enumeration of fields available for sorting absence search results.

**`Generated`**

from enum Scailo.ABSENCE_SORT_KEY

## Table of contents

### Enumeration Members

- [ABSENCE\_SORT\_KEY\_APPROVED\_BY](ABSENCE_SORT_KEY.md#absence_sort_key_approved_by)
- [ABSENCE\_SORT\_KEY\_APPROVED\_ON](ABSENCE_SORT_KEY.md#absence_sort_key_approved_on)
- [ABSENCE\_SORT\_KEY\_APPROVER\_ROLE\_ID](ABSENCE_SORT_KEY.md#absence_sort_key_approver_role_id)
- [ABSENCE\_SORT\_KEY\_COMPLETED\_ON](ABSENCE_SORT_KEY.md#absence_sort_key_completed_on)
- [ABSENCE\_SORT\_KEY\_CREATED\_AT](ABSENCE_SORT_KEY.md#absence_sort_key_created_at)
- [ABSENCE\_SORT\_KEY\_FINAL\_REF\_NUMBER](ABSENCE_SORT_KEY.md#absence_sort_key_final_ref_number)
- [ABSENCE\_SORT\_KEY\_FROM\_TIMESTAMP](ABSENCE_SORT_KEY.md#absence_sort_key_from_timestamp)
- [ABSENCE\_SORT\_KEY\_ID\_UNSPECIFIED](ABSENCE_SORT_KEY.md#absence_sort_key_id_unspecified)
- [ABSENCE\_SORT\_KEY\_LEAVE\_REQUEST\_ID](ABSENCE_SORT_KEY.md#absence_sort_key_leave_request_id)
- [ABSENCE\_SORT\_KEY\_MODIFIED\_AT](ABSENCE_SORT_KEY.md#absence_sort_key_modified_at)
- [ABSENCE\_SORT\_KEY\_REFERENCE\_ID](ABSENCE_SORT_KEY.md#absence_sort_key_reference_id)
- [ABSENCE\_SORT\_KEY\_TO\_TIMESTAMP](ABSENCE_SORT_KEY.md#absence_sort_key_to_timestamp)
- [ABSENCE\_SORT\_KEY\_USER\_ID](ABSENCE_SORT_KEY.md#absence_sort_key_user_id)

## Enumeration Members

### ABSENCE\_SORT\_KEY\_APPROVED\_BY

• **ABSENCE\_SORT\_KEY\_APPROVED\_BY** = ``4``

**`Description`**

Sort by the system ID of the approving user.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_APPROVED_BY = 4;

#### Defined in

[src/absences.scailo_pb.ts:51](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L51)

___

### ABSENCE\_SORT\_KEY\_APPROVED\_ON

• **ABSENCE\_SORT\_KEY\_APPROVED\_ON** = ``3``

**`Description`**

Sort by the official approval timestamp.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_APPROVED_ON = 3;

#### Defined in

[src/absences.scailo_pb.ts:44](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L44)

___

### ABSENCE\_SORT\_KEY\_APPROVER\_ROLE\_ID

• **ABSENCE\_SORT\_KEY\_APPROVER\_ROLE\_ID** = ``5``

**`Description`**

Sort by the security role ID used by the approver.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_APPROVER_ROLE_ID = 5;

#### Defined in

[src/absences.scailo_pb.ts:58](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L58)

___

### ABSENCE\_SORT\_KEY\_COMPLETED\_ON

• **ABSENCE\_SORT\_KEY\_COMPLETED\_ON** = ``6``

**`Description`**

Sort by the timestamp of record completion.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_COMPLETED_ON = 6;

#### Defined in

[src/absences.scailo_pb.ts:65](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L65)

___

### ABSENCE\_SORT\_KEY\_CREATED\_AT

• **ABSENCE\_SORT\_KEY\_CREATED\_AT** = ``1``

**`Description`**

Sort by the timestamp the record was initially created.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_CREATED_AT = 1;

#### Defined in

[src/absences.scailo_pb.ts:30](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L30)

___

### ABSENCE\_SORT\_KEY\_FINAL\_REF\_NUMBER

• **ABSENCE\_SORT\_KEY\_FINAL\_REF\_NUMBER** = ``11``

**`Description`**

Sort alphabetically by the system-generated reference number.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_FINAL_REF_NUMBER = 11;

#### Defined in

[src/absences.scailo_pb.ts:79](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L79)

___

### ABSENCE\_SORT\_KEY\_FROM\_TIMESTAMP

• **ABSENCE\_SORT\_KEY\_FROM\_TIMESTAMP** = ``14``

**`Description`**

Sort chronologically by the absence start date.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_FROM_TIMESTAMP = 14;

#### Defined in

[src/absences.scailo_pb.ts:100](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L100)

___

### ABSENCE\_SORT\_KEY\_ID\_UNSPECIFIED

• **ABSENCE\_SORT\_KEY\_ID\_UNSPECIFIED** = ``0``

**`Description`**

Default sort behavior (by internal ID).

**`Generated`**

from enum value: ABSENCE_SORT_KEY_ID_UNSPECIFIED = 0;

#### Defined in

[src/absences.scailo_pb.ts:23](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L23)

___

### ABSENCE\_SORT\_KEY\_LEAVE\_REQUEST\_ID

• **ABSENCE\_SORT\_KEY\_LEAVE\_REQUEST\_ID** = ``13``

**`Description`**

Sort numerically by the linked leave request ID.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_LEAVE_REQUEST_ID = 13;

#### Defined in

[src/absences.scailo_pb.ts:93](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L93)

___

### ABSENCE\_SORT\_KEY\_MODIFIED\_AT

• **ABSENCE\_SORT\_KEY\_MODIFIED\_AT** = ``2``

**`Description`**

Sort by the timestamp the record was last modified.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_MODIFIED_AT = 2;

#### Defined in

[src/absences.scailo_pb.ts:37](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L37)

___

### ABSENCE\_SORT\_KEY\_REFERENCE\_ID

• **ABSENCE\_SORT\_KEY\_REFERENCE\_ID** = ``10``

**`Description`**

Sort alphabetically by the user-provided reference ID.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_REFERENCE_ID = 10;

#### Defined in

[src/absences.scailo_pb.ts:72](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L72)

___

### ABSENCE\_SORT\_KEY\_TO\_TIMESTAMP

• **ABSENCE\_SORT\_KEY\_TO\_TIMESTAMP** = ``15``

**`Description`**

Sort chronologically by the absence end date.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_TO_TIMESTAMP = 15;

#### Defined in

[src/absences.scailo_pb.ts:107](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L107)

___

### ABSENCE\_SORT\_KEY\_USER\_ID

• **ABSENCE\_SORT\_KEY\_USER\_ID** = ``12``

**`Description`**

Sort numerically by the employee's user ID.

**`Generated`**

from enum value: ABSENCE_SORT_KEY_USER_ID = 12;

#### Defined in

[src/absences.scailo_pb.ts:86](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/absences.scailo_pb.ts#L86)
